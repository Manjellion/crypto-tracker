import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Typography } from 'antd';
import icon from'../images/cryptocurrency.png';
import Navigations from './Navigations';
import MobileNav from './MobileNav';

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
                        <Navigations />
                        <MobileNav />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
