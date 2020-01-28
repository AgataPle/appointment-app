import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <header className="header">


                <img src='../images/zabek.png' className="logo"/>


                <nav className="page-nav">
                    <ul className="page-nav-list">
                        <li><a href="#">STRONA GŁÓWNA</a></li>
                        <li><a href="#">OFERTA</a></li>
                        <li><a href="#">O NAS</a></li>
                        <li><a href="#">KONTAKT</a></li>
                        <li><a href="#">CERTYFIKATY</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
