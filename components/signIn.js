import React, {Component} from 'react';


export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        errors: [],
        sendedForm: false,
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const newErrors = [];
        const {name, email, message} = this.state;

        if (name.trim().length <= 2) newErrors.push('Imię musi być dłuższe niż 2 znaki');
        if (email.trim().length <= 3) newErrors.push('Email musi być dłuższ niż 3 znaki');
        if (!email.indexOf('@') === -1) newErrors.push('Email musi zawierać @');
        if (message.trim().length === 0) newErrors.push('Wiadomość nie może być pusta');

        this.setState({
            errors: newErrors,
            sendedForm: false
        });

        if (newErrors.length === 0) {
            this.setState({
                sendedForm: true,
                name: '',
                email: '',
                message: ''
            })
        }
    }

    render() {
        const style = {
            display: 'block'
        };


        return (
            <div className="form">
                <div>
                    <h2 className="form-invitation">Zapisz się na zajęcia</h2>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.sendedForm &&
                        <h1>Dziękujemy za wiadomość. Prosimy czekać na potwierdzenie mailowe zapisu na zajęcia.</h1>}
                        {this.state.errors.map((err, i) =>
                            <p key={i}>{err}</p>
                        )}
                        <label>Imię i nazwisko</label>
                        <input type="text" name='name' placeholder='Name' style={style}
                               value={this.state.name}
                               onChange={this.handleChange}
                        />
                        <label>Adres email</label>
                        <input type="email" name='email' placeholder='Email' style={style}
                               value={this.state.email}
                               onChange={this.handleChange}
                        />
                        <label>Treść wiadomości</label>
                        <textarea name='message' placeholder='Message' style={style}
                                  value={this.state.message}
                                  onChange={this.handleChange}
                        />
                        <button className="sign-in">Zapisz się!</button>
                    </form>
                </div>
            </div>
        );
    }
}

