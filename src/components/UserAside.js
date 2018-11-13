import React from 'react'
import DefaultProfileImg from '../images/default-profile-image.jpg'

export default ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img
                    className="img-thumbnail"
                    src={profileImageUrl || DefaultProfileImg}
                    alt={username}
                    height="200" width="200"/>
            </div>
        </div>
    </aside>
)