import React from 'react'
import {Link} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles'
const firebase = require("firebase")

class SignupComponent extends React.Component{
    constructor(){
        super()
            this.state={
                email:null,
                username: null,
                usernameConfirmation: '',
                password: null,
                passwordConfirmation: null,
                signupError: '',
                arr:[]
            }
    }
    render(){
        const {classes} = this.props
        return(<main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
                <Typography Component='h1' variant='h5'>
                    Sign Up!
                </Typography>
                <form onSubmit={(e)=> this.submitSignup(e)} className={classes.form}>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-email-input'>Enter Your Email</InputLabel>
                    <Input autoComplete='email' onChange={(e)=>this.userTyping('email',e)} autoFocus id='signup-email-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-username-input'>Enter Your Username</InputLabel>
                    <Input type='username' onChange={(e)=>this.userTyping('username',e)} id ='signup-username-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-password-input'>Create A Password</InputLabel>
                    <Input type='password' onChange={(e)=>this.userTyping('password',e)} id ='signup-password-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlFor='signup-password-confirmation-input'>Confirm Your Password</InputLabel>
                    <Input type='password' onChange={(e)=>this.userTyping('passwordConfirmation',e)} id ='signup-password-confirmation-input'></Input>

                </FormControl>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>SUBMIT</Button>
                </form>
                {
                    this.state.signupError?
                    <Typography className={classes.errorText} component='h5' variant='h6'>
                        {this.state.signupError}
                    </Typography>:
                    null
                }
                <Typography component='h5' variant='h6' className={classes.hasAccountHeader}>Already Have An Account?</Typography>
                <Link className={classes.logInLink} to='/login'>Log In!</Link>
            </Paper>
        </main>

        )
    }
    passwordIsvalid =()=> this.state.password===this.state.passwordConfirmation
    componentDidMount= ()=>{
        if (this.state.arr.length===0){
            firebase
            .firestore()
            .collection('users')
            //.where('users', 'array-contains', _usr.email)
            .onSnapshot(async res => {
                const names = res.docs.map(_doc => _doc.data().username);
                this.setState({
                arr: names
                })
            })
        }
    }
    checkforuserName=()=>{
        console.log(this.state.arr.includes(this.state.username))
        return this.state.arr.includes(this.state.username)
    }
    userTyping=(type,e)=>{
        switch(type){
            case 'email':
                this.setState({ email: e.target.value })
                break
            case 'username':
                this.setState({username: e.target.value})
                break
            case 'password':
                this.setState({ password: e.target.value })
                break
            case 'passwordConfirmation':
                this.setState({ passwordConfirmation: e.target.value })
                break
                default:
                    break
        }
        console.log(type,e)
    }
    submitSignup=(e)=>{
        e.preventDefault()
        
        if (!this.passwordIsvalid()){
            this.setState({signupError:'Passwords do not match!'})
            return
        }
        if(this.checkforuserName()){
            this.setState({signupError:'username error!'})
            return
        }
        
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes=>{
            const userObj={
                email: authRes.user.email,
                username: this.state.username
            }
            firebase
                .firestore()
                .collection('users')
                .doc(this.state.email)
                .set(userObj)
                .then(()=>{
                    console.log('success')
                   this.props.history.push('/dashboard')
                },dbError =>{
                    console.log(dbError)
                    this.setState({signupError:'Failed to add user'})
                }
                )
        }, authErr=>{
            console.log(authErr)
            this.setState({signupError:'Failed to add user'})
        }
        )
    }



}

export default withStyles(styles)(SignupComponent)