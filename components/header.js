import React, {Component} from 'react';
import {
    HashRouter,
    NavLink,
} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <header className="header">

                <HashRouter>
                    <NavLink to="/"><img src='../images/yoga-posture.png' className="logo"/></NavLink>

                </HashRouter>

                <nav className="page-nav page-nav-list">
                    <HashRouter>
                        <NavLink to="/about">o nas</NavLink>
                        <NavLink to="/harmonogram">harmonogram zajęć</NavLink>
                        <NavLink to="/contact">kontakt</NavLink>
                        <NavLink to="#">blog</NavLink>
                    </HashRouter>

                </nav>
            </header>
        )
    }
}
