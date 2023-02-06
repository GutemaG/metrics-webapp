import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './style/CoinCard.css';

function CoinCard() {
  return (
    <div>
      <Col border="danger" className="m-1">
        <Card className="bg-dark p-4 coin-card">
          <Card.Header as="h2">
            <span className="coin-name text-decoration-underline m-1">BitCoin</span>
            <span className="coin-increasing text-success text-decoration-none">+</span>
          </Card.Header>
          <Card.Text className="m-1 coin-price">
            $23006.8687
          </Card.Text>
        </Card>
      </Col>
    </div>
  );
}

export default CoinCard;
