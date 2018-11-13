import React from  'react';
import MessageList from '../containers/MessageList';
import UserAside from '../components/UserAside';

export default ({profileImageUrl, username}) => {
    return (
        <div className="row">
            <UserAside profileImageUrl={profileImageUrl} username={username} />
            <MessageList/>
        </div>
    )
}