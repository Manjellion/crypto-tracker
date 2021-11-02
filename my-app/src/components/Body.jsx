import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import { Cryptocurrencies, News } from '../components/index';

const { Title } = Typography;

const body = () => {
    return (
        <div className="App">
            <div className="body-container">
                <DownSquareOutlined style={{fontSize: 80, color:'navy'}}/>
                <h2>Track Your Crypto Currencies</h2> 
                <p>Accurately tracking cryptocurrency investment performance and taxes is hard. We make it easy and help you save money.</p>
                <button><Link to="/Account">Get Started Today</Link></button>
                <p>✅ Join users who trust Crypto Tracker</p>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title" style={{margin: 40}}>
                    Top 10 Cryptos In The World
                </Title>
                    <Cryptocurrencies simplified />
                <Title level={3} className="show-more-button">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <div className="home-heading-container">
                <Title level={2} className="home-title" style={{margin: 40}}>
                    Latest News on Crypto
                </Title>
                    <News simplified/>
                <Title className="show-more-button" level={3}>
                    <Link to="/news">Show More</Link>
                </Title>
            </div>
        </div>
    )
}

export default body;