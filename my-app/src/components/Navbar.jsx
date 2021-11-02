import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from 'antd';
import icon from'../images/cryptocurrency.png';

const Navbar = () => {
    return (
        <div className="App">
            <nav>
                <div class="nav-container">
                    <div className="logo-container">
                        <Avatar src={icon} size="medium"></Avatar>
                        <Typography.Title level={2} className="logo">
                            <Link to="/Home">Crypto Tracker</Link>
                        </Typography.Title>
                    </div>
                <ul>
                    <li>
                    <Link to="/Home">HOME</Link>
                    </li>
                    <li>
                    <Link to="/currencies">CURRENCIES</Link>
                    </li>
                    <li>
                    <Link to="/cryptocurrencies">CRYPTOCURRENCIES</Link>
                    </li>
                    <li>
                    <Link to="/account">ACCOUNT</Link>
                    </li>
                    <li>
                    <Link to="/news">NEWS</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
