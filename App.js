import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import MyComponent from './components/calendar';
import Map from './components/map';
import Footer from './components/footer';
import ContactForm from './components/signIn';
import Personel from './components/personel';

import './css/style.scss';

function App() {
    return (
        <HashRouter>
            <Route path={"/"} component={Header}/>
            <Route path={"/"} component={Banner}/>
            <Route path={"/"} component={MyComponent}/>
            <Route path={"/"} component={ContactForm}/>
            <Route path={"/"} component={Map}/>
            <Route path={"/"} component={Personel}/>
            <Route path={"/"} component={Footer}/>
        </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
