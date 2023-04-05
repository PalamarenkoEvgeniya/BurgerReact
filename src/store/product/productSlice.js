import { API_URI, POSTFIX } from '../../const';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  flagProduct: false,
  error: '',
};

export const productRequestAsync = createAsyncThunk(
  'product/fetch',
  (category) => fetch(`${API_URI}${POSTFIX}?category=${category}`)
    .then(req => req.json())
    .catch(error => ({ error }))
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(productRequestAsync.pending, state => {
        state.error = '';
        state.flagProduct = false;
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.products = action.payload;
        state.flagProduct = true;
      })
      .addCase(productRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error
      })
  }
});

export default productSlice.reducer;

