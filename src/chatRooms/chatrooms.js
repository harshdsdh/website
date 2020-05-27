import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';


class ChatRoomsComponent extends React.Component {
    
 render(){
     const {classes} = this.props
     
     return (<div>
                    <List>
                        {
                            this.props.chats.map((_chat, _index)=>{
                                return(
                                   <div key={_index}>
                                        <ListItem onClick={()=>this.selectChatRoom(_index)}
                                        className={classes.listItem}
                                        selected={this.props.selectedChatRoomIndex === _index }
                                        alignItems='flex-start'>
                                            <ListItemAvatar>
                                            <Avatar alt="Remy Sharp">{this.props.chatRoom[_index][0]}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText 
                                                primary={this.props.chatRoom[_index]}
                                                secondary={
                                                <React.Fragment>
                                                    <Typography component='span'
                                                        color='textPrimary'>
                                    
                                    {_chat.messages[_chat.messages.length - 1].message.substring(0, 30)}}
                                                    </Typography>
                                                </React.Fragment>
                                  }></ListItemText>
                                   {
                                        _chat.receiverHasRead === false && !this.userIsSender(_chat) ? 
                                        <ListItemIcon>
                                            <NotificationImportant className={classes.unreadMessage}></NotificationImportant>
                                        </ListItemIcon>: null
                                    }
        
                                    </ListItem>
                                    <Divider></Divider>
                                   </div>
                                )
                            })
                        }
                </List>
     </div>)
 }   
 newChat=()=>{
    this.props.newChatBtnFn()
 }
 selectChatRoom=(index)=>{
    this.props.selectChatRoomFn(index)
}
 userIsSender = (chat) => chat.messages[chat.messages.length - 1].sender === this.props.userEmail;

 
}
export default withStyles(styles)(ChatRoomsComponent)