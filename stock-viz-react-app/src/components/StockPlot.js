// components/StockPlot.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDailyStock } from '../features/stocks/stockSlice';
import PlotComponent from './PlotComponent';
import { convertData } from '../utils/apiDataConverter';

const StockPlot = ({ symbol }) => {
  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.stock.data);
  const status = useSelector((state) => state.stock.status);
  const error = useSelector((state) => state.stock.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDailyStock(symbol));
    }
  }, [symbol, status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>
  } else if (status === 'succeeded') {
    const plotData = convertData(stockData);
    content = <PlotComponent plotTitle={symbol} plotData={plotData} />;
  } else if (status === 'failed') {
    content = <div>{error}</div>
  }

  return <div>{content}</div>;
};

export default StockPlot;
