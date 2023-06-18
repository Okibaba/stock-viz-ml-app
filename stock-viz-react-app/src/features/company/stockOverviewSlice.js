import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCompanyOverview = createAsyncThunk('stockOverview/fetchCompanyOverview', 
  async (symbol, thunkAPI) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=F6QFLAWLVW9MF8ZF`);
    return response.data;
});

const stockOverviewSlice = createSlice({
  name: 'stockOverview',
  initialState: {
    companyOverview: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyOverview.pending, (state, action) => {
          state.status = 'loading';
      })
      .addCase(fetchCompanyOverview.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.companyOverview = action.payload;
      })
      .addCase(fetchCompanyOverview.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
      });
  },
});

export const stockOverviewReducer = stockOverviewSlice.reducer;

