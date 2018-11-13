import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        // on first usage
        componentWillMount() {
            if (this.props.isAuthenticated === false) {
                this.forwardToSignIn()
            }
        }
        // on state change
        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticated === false) {
                this.forwardToSignIn()
            }
        }

        forwardToSignIn = () =>  this.props.history.push('/signin');

        render() {
            return <ComponentToBeRendered {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate)
}



