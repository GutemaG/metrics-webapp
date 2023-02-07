import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/CoinCard.css';

const CoinCard = ({ coin }) => (
  <div>
    <Link to={`/detail/${coin.id}`} className="text-white">
      <Col border="danger" className="m-1">
        <Card className="bg-dark p-4 coin-card">
          <Card.Header as="h2">
            <div className="coin-card-header">
              <img src={coin.icon} alt="coin-icon" className="justify-content-center m-" />
              <span className="coin-name text-decoration-underline m-1">{coin.name}</span>
            </div>
          </Card.Header>
          <Card.Text className="m-1 coin-price">
            $
            {(Math.round(coin.price * 100) / 100).toFixed(3)}
            <span className="coin-increasing text-success text-decoration-none">+</span>
          </Card.Text>
        </Card>
      </Col>
    </Link>

  </div>
);
CoinCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
export default CoinCard;
