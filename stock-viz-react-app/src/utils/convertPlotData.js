// convertPlotData.js

// Function to convert plot data to the format expected by DataTableComponent.
function convertPlotData(plotData) {
    return plotData[0].x.map((date, i) => ({ date, price: plotData[0].y[i] }));
}

export default convertPlotData;
