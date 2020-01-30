import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import MyComponent from './components/calendar';
import Map from './components/map';
import Footer from './components/footer';
import SignIn from './components/signIn';
import Personel from './components/personel';
import Schedule from './components/schedule';
import ContactForm from './components/contact';
import BannerClasses from './components/bannerClasses';
import BannerPersonel from './components/bannerPersonel';
import BannerContact from './components/bannerContact';

import './css/style.scss';

function App() {
    return (
        <HashRouter>
            <>
                <Route path={"/"} component={Header}/>
                <Route exact path={"/"} component={Banner}/>
                <Route path={"/about"} component={BannerPersonel}/>
                <Route path={"/about"} component={Personel}/>
                <Route exact path={"/harmonogram"} component={BannerClasses}/>
                <Route exact path={"/harmonogram"} component={Schedule}/>
                <Route exact path={"/harmonogram"} component={SignIn}/>
                <Route exact path={"/contact"} component={BannerContact}/>
                <Route exact path={"/contact"} component={ContactForm}/>
                <Route path={"/"} component={Footer}/>
            </>
        </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
