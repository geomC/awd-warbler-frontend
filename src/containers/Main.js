import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import Authform from '../components/AuthForm';
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';


const Main = props => {
    const {authUser, errors, removeError, currentUser} = props;
    return (
        <div className="container">
            <Switch>

                {/* on index route, show homepage. pass props to homepage so the component can route too*/}
                <Route
                    exact path="/"
                    render={props => <Homepage {...props} currentUser={currentUser}/>}
                />

                <Route exact path="/signin"
                       render={props => {
                    return (
                        <Authform
                            removeError={removeError}
                            onAuth={authUser}
                            errors={errors}
                            buttonText="Log in"
                            heading="Welcome Back."
                            {...props}/>
                    )
                }} />

                <Route exact path="/signup" render={props => {
                    return (
                        <Authform
                            removeError={removeError}
                            onAuth={authUser}
                            errors={errors}
                            buttonText="Sign me up!"
                            heading="Join Warbler today"
                            {...props}
                            signup={true}/>
                    )
                }} />

                <Route path="/users/:id/messages/new" component={withAuth(MessageForm)}/>
            </Switch>
        </div>
    )
};

// connect to redux store
function mapStateToProps(state) {
    const {currentUser, errors} = state;
    return {
        currentUser,
        errors
    }
}

export default withRouter(// get props for routing
    connect(mapStateToProps, {authUser, removeError})(Main)
)