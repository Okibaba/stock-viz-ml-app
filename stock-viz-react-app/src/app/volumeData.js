

// Function to generate a synthetic stock price for a given day.
// The new price is the previous price plus a random change.
function generatePrice(prevPrice) {
    const change = 2 * Math.random() - 1;  // Random change between -1 and 1.
    return prevPrice + change;
  }
  
  // Function to generate a list of dates between two dates.
  function generateDates(startDate, endDate) {
    const dates = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        dates.push(date.toISOString().slice(0, 10));  // Add date to dates.
    }
    return dates;
  }
  
  // Function to generate synthetic stock prices.
  function generateSyntheticData() {
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 2);  // Start date is two years ago.
    const endDate = new Date();
  
    const dates = generateDates(startDate, endDate);  // Generate dates.
    const prices = [3300];  // Starting volume.
  
    // Generate prices.
    for (let i = 1; i < dates.length; i++) {
        prices.push(generatePrice(prices[i - 1]));
    }
  
    return [{ x: dates, y: prices }];
  }
  
  const volumeData = generateSyntheticData();
  
  
  
  export default volumeData;
  
  
  