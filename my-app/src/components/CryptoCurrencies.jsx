import React, { useEffect, useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import currency from './currencies';

// simplfied is a attribute from Body.jsx 
const CryptoCurrencies = ({ simplified }) => {
    // if simplified is true then it will display 10 if flase it will display 100
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFecthing } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

    if(isFecthing) {return 'Loading...'}

    return (
        // React Fragment
        <>
            <div className="Currency">
                <Row gutter={[32, 32]} className="crypto-card-container">
                    {cryptos?.map((currency) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link key={currency.id} to={`/crypto/${currency.id}`}>
                                <Card hoverable title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />}>
                                    <p>Price: {millify(currency.price)} USD</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {(currency.change)}%</p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default CryptoCurrencies;
