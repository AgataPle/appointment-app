import React, {Component} from 'react';


export default class SignIn extends Component {
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
                        <input type="text" name='name' placeholder='Imię i nazwisko' style={style}
                               value={this.state.name}
                               onChange={this.handleChange}
                        />
                        <label>Adres email</label>
                        <input type="email" name='email' placeholder='Email' style={style}
                               value={this.state.email}
                               onChange={this.handleChange}
                        />
                        <label>Treść wiadomości</label>
                        <textarea name='message' placeholder='Wiadomość' style={style}
                                  value={this.state.message}
                                  onChange={this.handleChange}
                        />
                        <select>
                            <option value="Zajęcia1">Zajęcia 1</option>
                            <option value="Zajęcia2">Zajęcia 2</option>
                            <option selected value="Zajęcia3">Zajęcia 3</option>
                            <option value="Zajęcia4">Zajęcia 4</option>
                            <option value="Zajęcia5">Zajęcia 5</option>
                        </select>
                        <select>
                            <option value="Zajęcia1">Poniedziałek</option>
                            <option value="Zajęcia2">Wtorek</option>
                            <option selected value="Zajęcia3">Środa</option>
                            <option value="Zajęcia4">Czwartek</option>
                            <option value="Zajęcia5">Piątek</option>
                        </select>
                        <button className="sign-in">Zapisz się!</button>
                    </form>
                </div>
            </div>
        );
    }
}

