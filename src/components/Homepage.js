import React from 'react';
import {Link} from 'react-router-dom'

export default ({currentUser}) => (
    <div className="home-hero">
        {
            currentUser.isAuthenticated ? (
                <h1>Welcome back {currentUser.user.username}!</h1>
            ) : (
                <div>
                    <h1>What's happening?</h1>
                    <h4> New to Warbler?</h4>
                    <Link to="/signup" className="btn btn-primary">
                        Sign up here
                    </Link>
                </div>
            )}
    </div>
)