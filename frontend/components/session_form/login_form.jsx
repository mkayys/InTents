import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-header">
                        <h4>Hey, welcome back!</h4>
                        <h6>It's about time for another adventure</h6>
                    </div>
                <br />
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email address"
                            />
                        <br />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                            />
                        <br />
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        {/* <h6>By signing up, I agree to in-Tents's 
                            terms and privacy policy.</h6> */}
                    </div>
                </form>
            </div>
        );

    }
}

export default LoginForm;