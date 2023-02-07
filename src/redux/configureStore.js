import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './crypto/crypto';

const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
  },
});

export default store;
