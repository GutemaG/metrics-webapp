import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_CRYPTO = 'metrics-webapp/crypto/FETCH_CRYPTO';

export const fetchCryptos = createAsyncThunk(FETCH_CRYPTO, async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const data = await response.json();
  return data.coins;
});

const initialState = {
  cryptos: [],
  isLoading: false,
  error: null,
};
const cryptoSlice = createSlice({
  name: FETCH_CRYPTO,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptos.pending, (state) => ({
      ...state,
      isLoading: true,
    })).addCase(fetchCryptos.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      cryptos: action.payload,
    })).addCase(fetchCryptos.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
  },
});

export default cryptoSlice.reducer;
