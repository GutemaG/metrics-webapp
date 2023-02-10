import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './style/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const { cryptos } = useSelector((state) => state.crypto);
  const selectedCrypto = cryptos.find((crypto) => crypto.id === id);

  return (
    <Container className="detail-container">
      <div className="coin-icon-container">
        <img src={selectedCrypto.icon} alt="coin-icon" className="coin-icon" />
        <h3>{selectedCrypto.name}</h3>
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
              <td>Symbol</td>
              <td>{selectedCrypto.symbol}</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>{selectedCrypto.rank}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{selectedCrypto.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                $
                {(Math.round(selectedCrypto.price * 100) / 100).toFixed(3)}
              </td>
            </tr>
            <tr>
              <td>Price BTC</td>
              <td>
                {selectedCrypto.priceBtc}
              </td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{selectedCrypto.volume}</td>
            </tr>
          </tbody>
        </Table>
      </Container>

    </Container>
  );
};
export default Detail;
