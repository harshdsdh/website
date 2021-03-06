import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles'
import LesLuvImg from './img.svg'


class WelcomePage extends React.Component{
    
    render(){
        const {classes} = this.props

        return(<main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
<<<<<<< HEAD
            <Button href="./login" color="50c49f" size='large'>LogIn</Button><br/>
=======
            <Button href='./login' color="50c49f" size='large'>LogIn</Button>
>>>>>>> 42ab96e61bd7d80a204bd6d9a5ac29265162df69
            <Button href='./signup' color='50c49f' size='large'>SignUp</Button>

                <Typography component='h2' variant='h2' color='50c49f' >
                Welcome to AfrikLesLuv
                </Typography>
                <Typography component='h3'  >
                You can register for a free account, you can chat or call for free, add friends, receive offline messages. 
                </Typography>
                <div className="image">
                    <img src={LesLuvImg} height='500px'/>
                </div>
                <Typography component='h4'  fontColor='50c49f'>
                Friendly
                </Typography>
                <Typography component='h3' variant='h4' font-color='50c49f'>
                Make relationships, friendships every day without any limits for free! Be who you are on AfrikLesLuv chat.
                </Typography>
                <Typography component='h4' variant='h4' font-color='50c49f'>
                You can use AfrikLesLuv chat at any time!
                </Typography>
                <Typography component='h5' variant='h5' font-color='50c49f' alignText='left'>
                © 2020 AfrikLesLuv.net 
                </Typography>
                
               
                
            </Paper>
            <footer>
            
<<<<<<< HEAD
            <Link to='./privacy' target="_blank">Privacy Policy</Link><br/>
            <a href="./cookies" target="_blank">Cookie Policy</a><br/>
            <Link to='./safety'>Safety Policy</Link><br/>
=======
            <Link to='./privacy' target="_blank">Privacy Policy</Link>
            <Link to='./cookies' target="_blank">Cookie Policy</Link>
            <Link to='./safety' target="_blank">Safety Policy</Link>
>>>>>>> 42ab96e61bd7d80a204bd6d9a5ac29265162df69

            </footer>
        </main>)
    }
    
    }

export default withStyles(styles)(WelcomePage)