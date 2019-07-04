import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
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

    handleDemoSubmit(e) {
        e.preventDefault();
        this.state = {
            email: 'rmapa@aa.io', 
            password: 'password'
        }
        const demoUser = Object.assign({}, this.state);
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <div>
                <ul className='login-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
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
                        <input className="login-submit" type="submit" value={this.props.formType} />
                        <br />
                        <div className="login-form-footer">
                            or
                            <br />
                            <input 
                                className='demo-user' 
                                type="submit" 
                                value="Log in as a Demo User" 
                                onClick={this.handleDemoSubmit}
                            />
                        </div>
                        
                    </div>
                </form>
            </div>
        );

    }
}

export default LoginForm;