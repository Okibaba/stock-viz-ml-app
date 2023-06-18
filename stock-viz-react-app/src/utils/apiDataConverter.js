// this helper function formats data from alpha vantage API

export const convertData = (stockData) => {
    const dates = Object.keys(stockData);
    const closingPrices = dates.map((date) => stockData[date]['4. close']);
    return [{ x: dates, y: closingPrices }];
  };
  