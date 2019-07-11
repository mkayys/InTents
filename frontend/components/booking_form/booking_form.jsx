import React from 'react';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: '',
            checkOut: '',
            numGuests: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillMount() {
    //     this.props.clearErrors();
    // }

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

export default BookingForm;