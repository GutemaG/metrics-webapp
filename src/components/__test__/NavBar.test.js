import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../NavBar';
import store from '../../redux/configureStore';

describe('Testing NavBar page', () => {
  test('Render NavBar page correctly', () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
    expect(navbar.getByText('CryptoCurrencies')).toBeInTheDocument();
  });
});
