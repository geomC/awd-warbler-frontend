import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from "../images/warbler-logo.png";
import {logout} from "../store/actions/auth";

class Navbar extends Component{

    logout = e => {
        e.preventDefault();
        this.props.logout();
    };

    render() {
        const {isAuthenticated, user} = this.props.currentUser;

        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    {isAuthenticated ? (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link
                                    to={`/users/${user.id}/messages/new`}
                                >
                                    New Message
                                </Link>
                            </li>
                            <li>
                                <a onClick={this.logout}>Log out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Log in</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps, {logout})(Navbar);