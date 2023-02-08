import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Form,
  Row,
  Spinner,
} from 'react-bootstrap';
import CoinCard from '../components/CoinCard';
import './style/Home.css';
import { fetchCryptos } from '../redux/crypto/crypto';

let isFetched = false;
const Home = () => {
  const { cryptos, isLoading, error } = useSelector((state) => state.crypto);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchCryptos());
      isFetched = true;
    }
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCryptos = cryptos ? cryptos.filter(
    (crypto) => crypto.name.toLowerCase()
      .includes(search.toLowerCase()),
  ) : [];
  return (
    <Container>
      <h1 className="text-center mt-4">Top Crypto Currencies</h1>
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
        {!isLoading && (
          <div>
            <Form.Control
              type="search"
              placeholder="Search coins by their name"
              className="m-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Row md={4}>
              {
                filteredCryptos.map((coin) => (
                  <CoinCard key={coin.id} coin={coin} />
                ))
                }
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
};

export default Home;
