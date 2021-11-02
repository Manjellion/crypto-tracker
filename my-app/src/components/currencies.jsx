import React, { useState }from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { StockOutlined, DollarCircleOutlined, EuroCircleOutlined, PieChartOutlined, BarChartOutlined, BankOutlined } from '@ant-design/icons';

const { Title } = Typography;

const currency = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isFetching } = useGetCryptosQuery(10);  // By placing 10 into the hook query we make the count 10, resulting in the query to request the limit at 10 
    const globalStats = data?.data?.stats;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data: cryptoList, isFecthing } = useGetCryptosQuery();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

    if(isFetching) return 'Loading...';
    console.log(globalStats)
    return (
        <div className="Currency">
            <Title level={2} className="heading">Global Crypto Stats</Title>
                <Row gutter={[32, 32]}>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /><DollarCircleOutlined style={{fontSize: '40px'}}/></Col>
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /><BankOutlined style={{fontSize: '40px'}}/></Col>
                    <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /><EuroCircleOutlined style={{fontSize: '40px'}}/></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /><BarChartOutlined style={{fontSize: '40px'}}/></Col>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /><StockOutlined style={{fontSize: '40px'}}/></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /><PieChartOutlined style={{fontSize: '40px'}}/></Col>
                </Row>
        </div>
    )
}

export default currency;
