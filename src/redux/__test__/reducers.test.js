import coinReducer, { fetchCryptos } from '../crypto/crypto';
// import fetchCryptos from '../crypto/crypto';
describe('Testing reducers', () => {
  it('can return initial value', () => {
    const initialState = {
      cryptos: [],
      isLoading: false,
      error: null,
    };

    expect(coinReducer(undefined, {})).toEqual(initialState);
  });

  it('handle success fetching crypto', () => {
    const data = ['crypto1', 'crypto2', 'crypto4', 'crypto4'];
    expect(coinReducer(undefined, fetchCryptos.fulfilled(data))).toEqual({
      cryptos: data,
      isLoading: false,
      error: null,
    });
  });
});
