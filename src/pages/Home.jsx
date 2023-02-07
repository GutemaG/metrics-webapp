import React from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';
import CoinCard from '../components/CoinCard';
import './style/Home.css';
import { coins } from '../constant';

function Home() {
  return (
    <Container>
      <h1 className="text-center mt-4">Top Crypto Currency</h1>
      {/* <Button variant="secondary" className="align-self-end">Show In table</Button> */}
      <Container className="card-container">
        <Row md={4}>
          {
            coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
