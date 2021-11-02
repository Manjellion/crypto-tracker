import React from 'react';
import './App.css'
import { Switch, Route, Link } from 'react-router-dom';

import { Navbar, Body, Currencies, Cryptocurrencies, Account, News } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <div className="routes">
                    <Switch>
                        <Route exact path="/Home">
                            <Body/>
                        </Route>
                        <Route exact path="/currencies">
                            <Currencies/>
                        </Route>
                        <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies/>
                        </Route>
                        <Route exact path="/Account">
                            <Account/>
                        </Route>
                        <Route exact path="/News">
                            <News/>
                        </Route>
                    </Switch>
                </div>
            </div>
            <div className="footer">
                Doge Tracker <br />
                All rights reserverd <br />
                <Link to="/Home">Home</Link>
                <Link to="/currencies">Currencies</Link>
                <Link to="/Account">Account</Link>
                <Link to="/News">News</Link>
            </div>
        </div>
    )
}

export default App
