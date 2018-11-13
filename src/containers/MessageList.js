import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages, removeMessage} from "../store/actions/messages";
import MessageItem from '../components/MessageItem'

class MessageList extends Component{

    componentDidMount() {
        this.props.fetchMessages()
    }

    render() {
        const {messages, currentUserId, removeMessage} = this.props;
        const messagesList = messages.map( m => (
            <MessageItem
                onRemove={removeMessage.bind(this, m._id)}
                key={m._id}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
                date={m.createdAt}
                isCorrectUser={currentUserId === m.user._id}
            />
        ));
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id ="messages">
                        {messagesList}
                    </ul>
                </div>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUserId: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, {fetchMessages, removeMessage})(MessageList)