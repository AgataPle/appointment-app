import React, {Component} from 'react';


export default class Header extends Component {
    render() {
        return (
            <header className="header">


                <img src='../images/yoga-posture.png' className="logo"/>


                <nav className="page-nav">
                    <ul className="page-nav-list">
                        <li><a href="/about">o nas</a></li>
                        <li><a href="#">harmonogram zajęć</a></li>
                        <li><a href="#">kontakt</a></li>
                        <li><a href="#">blog</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
