// PlotComponent.js

import React from 'react';
import Plot from 'react-plotly.js';

const PlotComponent = ({ plotData }) => {
    return (
        <Plot
            data={plotData.map(data => ({
                x: data.x,
                y: data.y,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'red'},
            }))}
            layout={ {
                width: 720, 
                height: 440, 
                title: 'A Fancy Plot',
                xaxis: {
                    rangeselector: {
                        buttons: [
                            {count: 1, label: '1d', step: 'day', stepmode: 'backward'},
                            {count: 7, label: '1w', step: 'day', stepmode: 'backward'},
                            {count: 1, label: '1m', step: 'month', stepmode: 'backward'},
                            {count: 6, label: '6m', step: 'month', stepmode: 'backward'},
                            {count: 1, label: '1y', step: 'year', stepmode: 'backward'},
                            {step: 'all'}
                        ]
                    },
                    rangeslider: {autorange: true},
                    type: 'date'
                }
            } }
        />
    );
}

export default PlotComponent;
