import React from 'react';
import { Link } from 'react-router-dom';

const body = () => {
    return (
        <div className="App">
            <div className="body-container">
                <h2>Track Your Crypto Currencies</h2> 
                <p>Accurately tracking cryptocurrency investment performance and taxes is hard. We make it easy and help you save money.</p>
                <button><Link to="/">Get Started Today</Link></button>
                <p>✅ Join users who trust Doge Tracker</p>
            </div>
        </div>
    )
}

export default body;