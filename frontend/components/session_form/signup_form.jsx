import React from 'react';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            zip_code: ''
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="signup-header">
                        <h4>Join in-Tents</h4>
                        <h6>Discover the best places to pitch your tent</h6>
                    </div>    
                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
                        <div className='signup-fname-lname'>
                            <input type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="signup-input fname"
                                placeholder="First name..."
                            />
                            <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="signup-input lname" 
                                placeholder="Last name..."
                            />
                        </div>
                        <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                                placeholder="Email address..."
                            />
                        <br />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                                placeholder="Password..."
                            />
                        <br />
                        <br />
                            <input type="text"
                                value={this.state.zip_code}
                                onChange={this.update('zip_code')}
                                className="signup-input"
                                placeholder="Zip code..."
                            />
                        <br />
                        <br />
                        <input className="signup-submit" type="submit" value="Join in-Tents" />
                        <br />
                        <br />
                        <div className="signup-form-footer">By signing up, I agree to in-Tents's 
                            terms and privacy policy.</div>
                    </div>
                </form>
            </div>
        );
    
    }
}

export default SignupForm;