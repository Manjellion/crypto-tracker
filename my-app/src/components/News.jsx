import React, { useState } from 'react';
import moment from 'moment';
import { Card, Row, Col, Select, Typography, Avatar } from 'antd';

import { useGetNewsQuery } from '../services/newsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetNewsQuery({ newsCategory , count: simplified ? 6 : 12  });
    
    if(!cryptoNews?.value) return 'Loading... ';

    return (
        <div className="news-container">
            <Title level={2}>Crypto News</Title>
            <Row gutter={[24, 24]}>
                {cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card"  title={news.name}  extra={<img src={news?.image?.thumbnail?.contentUrl || demoImage}></img>}>
                            <a href={news.url} target="_blank">
                                <p>
                                    {news.description > 100 ? `${news.description.substring(0, 100)}...`
                                    : news.description 
                                    }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News;
