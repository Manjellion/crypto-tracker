import React from 'react';
import Navigations from './Navigations';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Avatar, Button, Typography } from 'antd';
import icon from'../images/cryptocurrency.png';
=======
import { Avatar, Typography } from 'antd';
import icon from'../images/menu.png';
import { DownSquareOutlined } from '@ant-design/icons';
>>>>>>> 456df153fa1f6a25da3eee055f6811c7d2777011

const Navbar = () => {
    return (
        <div className="App">
            <nav>
                <div class="nav-container">
                    <div className="logo-container">
                    <DownSquareOutlined style={{fontSize: 40, color:'white'}}/>
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
