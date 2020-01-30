import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="contact">
                    <h3>KONTAKT</h3>
                    <p>adres</p>
                    <p>numer telefonu</p>
                    <p>mail</p>
                </div>
                <div className="opening-hours">
                    <h3>GODZINY OTWARCIA</h3>
                    <p><strong>poniedziałek - piątek</strong> 08:00 - 22:00</p>
                    <p><strong>sobota </strong>10:00 - 22:00</p>
                    <p><strong>niedziela</strong> 10:00 - 18:00</p>
                </div>
                <div className="social-media">
                    <img className="facebook" src="../images/facebook-app-logo.png"/>
                    <img className="insta" src="../images/instagram-logo.png"/>
                    <img className="logo-footer" src='../images/yoga-posture.png'/>

                </div>
            </div>
        )
    }
}
