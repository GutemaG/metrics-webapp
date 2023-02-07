import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';
import CoinCard from '../components/CoinCard';
import './style/Home.css';
import { fetchCryptos } from '../redux/crypto/crypto';

const Home = () => {
  const { cryptos, isLoading, error } = useSelector((state) => state.crypto);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptos());
  }, []);
  return (
    <Container>
      <h1 className="text-center mt-4">Top Crypto Currency</h1>
      {/* <Button variant="secondary" className="align-self-end">Show In table</Button> */}
      <Container className="card-container">
        { isLoading && (
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden" size="lg">Loading...</span>
            </Spinner>
          </div>
        )}
        { error && (
          <div className="spinner">
            <h1 className="text-danger">{error}</h1>
          </div>
        )}

        <Row md={4}>
          {
            cryptos.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
