import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { apiUrl } from '../../../shared/apiUrl';
//import { apiKey } from '../../../shared/apiKey';
import axios from 'axios';

export const fetchDailyStock = createAsyncThunk('stock/fetchDailyStock', 
    async (symbol, thunkAPI) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=F6QFLAWLVW9MF8ZF`);
    return response.data['Time Series (Daily)'];

});

export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        data: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDailyStock.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchDailyStock.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                console.log('success!')
                
            })
            .addCase(fetchDailyStock.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const stockReducer = stockSlice.reducer;
