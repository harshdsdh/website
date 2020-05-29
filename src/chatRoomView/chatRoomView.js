import React from 'react'
import styles from './styles'
import {withStyles} from '@material-ui/core/styles'

class ChatRoomViewComponent extends React.Component{
    componentDidMount = () => {
        const container = document.getElementById('chatroomview-container');
        if(container)
          container.scrollTo(0, container.scrollHeight);
      }
      componentDidUpdate = () => {
        const container = document.getElementById('chatroomview-container');
        if(container)
          container.scrollTo(0, container.scrollHeight);
      }
    render(){
        const {classes, chat, user, room} = this.props
        
        if(chat===undefined){
            return(<main id='chatroomview-container' className={classes.content}></main>)

        }else{
            console.log("asd",classes.chatHeader)
              return(
               
                <div>
                <div className={classes.chatHeader}>
                    Your conversation with {(room!=null)?room:this.props.chat.users.filter(_usr => _usr !== this.props.user)[0]}
                </div>
                <main id='chatroomview-container' className={classes.content}>
                      {
                          chat.messages.map((_msg,_index)=>{
                              return (
                                  <div key={_index} className={_msg.sender===user? classes.userSent:classes.friendSent}>
                                      {_msg.message}

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
export default withStyles(styles)(ChatRoomViewComponent)