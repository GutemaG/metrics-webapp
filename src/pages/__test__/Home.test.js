import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import store from '../../redux/configureStore';

describe('Testing home page', () => {
  test('Render Home page correctly', () => {
    const homePage = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(homePage).toMatchSnapshot();
    expect(homePage.getByText('Top Crypto Currencies')).toBeInTheDocument();
  });
});
