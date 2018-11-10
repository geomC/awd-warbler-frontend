import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';

const Main = props => {
    return (
        <div className="container">
            <Switch>
                {/* on index route, show homepage. pass props to homepage so the component can route too*/}
                <Route exact path="/" render={props => <Homepage {...props} />} />
            </Switch>
        </div>
    )
};

// connect to redux store
function mapStateToProps(state) {
    const {currentUser} = state;
    return {
        currentUser
    }
}

export default withRouter(// get props for routing
    connect(mapStateToProps, null)(Main)
)