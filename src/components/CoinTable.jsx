import React from 'react';
import { Table } from 'react-bootstrap';

function CoinTable() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>24hr Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>BitCoin</td>
          <td>BTC</td>
          <td>$22,300</td>
          <td>+0.45%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>BitCoin</td>
          <td>BTC</td>
          <td>$22,300</td>
          <td>+0.45%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>BitCoin</td>
          <td>BTC</td>
          <td>$22,300</td>
          <td>+0.45%</td>
        </tr>
        <tr>
          <td>1</td>
          <td>BitCoin</td>
          <td>BTC</td>
          <td>$22,300</td>
          <td>+0.45%</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CoinTable;
