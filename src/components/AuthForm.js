import React, {Component} from 'react';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''

        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signup ? 'signup' : 'signin';
        this.props.onAuth(authType, this.state).then(() => {
            // forward to home
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            return
        })
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        const {email, username, password, profileImageUrl} = this.state;
        const {
            heading,
            buttonText,
            signup,
            errors,
            removeError,
            history // from react-router
        } = this.props;

        // listen for route changes. if there is, remove errors
        history.listen(removeError);

        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>

                            {
                                errors.message && (
                                    <div className="alert alert-danger">
                                        {errors.message}
                                    </div>
                                )
                            }

                            <label htmlFor="email">Email:</label>
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                type="text"
                                onChange={this.handleChange}
                                value={email}
                            />

                            <label htmlFor="password">Password:</label>
                            <input
                                className="form-control"
                                id="password"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                value={password}
                            />
                            {/* if signup is set truthy*/}
                            {signup && (
                                <div>

                                    <label htmlFor="username">Username:</label>
                                    <input
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={username}
                                    />

                                    <label htmlFor="image-url">Image URL:</label>
                                    <input
                                        className="form-control"
                                        id="image-url"
                                        name="profileImageUrl"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={profileImageUrl}
                                    />


                                </div>
                            )}

                            <button type="submit">{buttonText}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}