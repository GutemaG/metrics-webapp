import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './style/Detail.css';

const Detail = () => {
  const d = {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/1650455588819.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 23007.346911011686,
    priceBtc: 1,
    volume: 28148637084.822525,
    marketCap: 443657572689.11163,
    availableSupply: 19283300,
    totalSupply: 21000000,
    priceChange1h: 0.03,
    priceChange1d: 0.49,
    priceChange1w: -0.44,
    websiteUrl: 'http://www.bitcoin.org',
    twitterUrl: 'https://twitter.com/bitcoin',
    exp: [
      'https://blockchair.com/bitcoin/',
      'https://btc.com/',
      'https://btc.tokenview.io/',
    ],
  };

  return (
    <Container className="detail-container">
      <div className="coin-icon-container">
        <img src={d.icon} alt="coin-icon" className="coin-icon" />
        <h3>{d.name}</h3>
      </div>
      <Container className="w-50">
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rank</td>
              <td>{d.rank}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{d.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                $
                {d.price}
              </td>
            </tr>
            <tr>
              <td>Bitcoin Price</td>
              <td>{d.priceBtc}</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{d.volume}</td>
            </tr>
          </tbody>
        </Table>
      </Container>

    </Container>
  );
};
export default Detail;
