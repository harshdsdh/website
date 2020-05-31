import React from 'react'
import styles from './styles'
import {withStyles} from '@material-ui/core/styles'

class ChatViewComponent extends React.Component{
    
  componentDidMount = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }
  componentDidUpdate = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }
    render(){
        const {classes, chat, user} = this.props
        const {randomColor} ={color:'red'}
        if(chat===undefined){
            return(<main id='chatview-container' className={classes.content}></main>)

        }else{
            console.log("as",chat)
              return(
                <div>
                <div className={classes.chatHeader}>
                    Your conversation with {this.props.chat.users.filter(_usr => _usr !== this.props.user)[0]}
                </div>
                <main id='chatview-container' className={classes.content}>
                      {
                          chat.messages.map((_msg,_index)=>{
                              return (
                                  <div key={_index} className={_msg.sender===user? classes.userSent:classes.friendSent}>
                                      <div style={{randomColor}}>{(_msg.sender===user? 'you':_msg.sender) +' : '+ _msg.message}</div>
                                  </div>
                              )
                          })
                      }
                  </main>
                </div>
              )
        }
        
    }

}
export default withStyles(styles)(ChatViewComponent)