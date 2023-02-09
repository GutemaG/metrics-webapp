import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CoinCard from '../components/CoinCard';

describe('Testing CoinCard component', () => {
  const coin = {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/1650455588819.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 22959.100151023245,
    priceBtc: 1,
    volume: 36394172890.744354,
    marketCap: 442766521921.6851,
    availableSupply: 19285012,
    totalSupply: 21000000,
    priceChange1h: 0.39,
    priceChange1d: -0.15,
    priceChange1w: -0.15,
    websiteUrl: 'http://www.bitcoin.org',
    twitterUrl: 'https://twitter.com/bitcoin',
  };
  const coinCard = render(
    <Provider store={store}>
      <BrowserRouter>
        <CoinCard id={coin.id} coin={coin} />
      </BrowserRouter>
    </Provider>,
  );
  test('Render coin card component correctly', () => {
    expect(coinCard).toMatchSnapshot();
  });
});
