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
        this.emailTyper = this.emailTyper.bind(this);
        this.passwordTyper = this.passwordTyper.bind(this);
    }

    componentWillMount() {
        this.props.clearErrors();
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

    handleDemoSubmit() {
        this.state = {
            email: 'rmapa@aa.io', 
            password: 'password'
        }
        const demoUser = Object.assign({}, this.state);
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    emailTyper(e) {
        e.preventDefault();
        let i = 0;
        let email = 'rmapa@aa.io'
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let email_field = document.getElementById("email");
        email_field.value = "";

        const typeWriter = () => {
            if (i < email.length) {
                email_field.value += email.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };

        typeWriter();
        setTimeout(this.passwordTyper, 1000);
        setTimeout(this.handleDemoSubmit, 1800);
    };

    passwordTyper() {
        let i = 0;
        const password = 'password'
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let password_field = document.getElementById("password");
        password_field.value = "";

        const typeWriter = () => {
            if (i < password.length) {
                password_field.value += password.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };
        typeWriter();
    };

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
                <form className="login-form-box">
                    <div className='close-form' onClick={this.props.closeModal}>
                        <i className="fas fa-times"></i>
                    </div>
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
                                id="email"
                                placeholder="Email address"
                            />
                        <br />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                id="password"
                                placeholder="Password"
                            />
                        <br />
                        <br />
                        <div className="login-form-footer">
                            <input 
                                className="login-submit" 
                                type="submit" 
                                value={this.props.formType} 
                                onClick={this.handleSubmit}
                            />
                            <input
                                className='demo-user'
                                type="submit"
                                value="Demo User"
                                onClick={this.emailTyper}
                            />
                        </div>
                        <br />
                        <div className='login-form-switch'>
                            New to in-Tents? &nbsp; {this.props.otherForm}
                        </div>
                    </div>
                </form>
            </div>
        );

    }
}

export default LoginForm;