import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import Offer from './components/offer';
import Calendar from './components/calendar';
import SimpleMap from './components/map';

function App() {
    return (
        <HashRouter>
            <Route path={"/"} component={Header}/>
            <Route path={"/"} component={Banner}/>
            <Route path={"/"} component={Offer}/>
            <Route path={"/"} component={Calendar}/>
            <Route path={"/"} component={SimpleMap}/>
        </HashRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
