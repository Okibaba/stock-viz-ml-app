import React from 'react';
import PlotComponent from '../components/PlotComponent';
import plotData from '../app/plotData';
import volumeData from '../app/volumeData';


const PlotComponentSubPage = () => {
  
   return (
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <PlotComponent plotTitle= {'Apple returns'} plotData={plotData} />
        </div>
        <div style={{ flex: 1 }}>
          <PlotComponent plotTitle= {'Apple Trading Volume'} plotData={volumeData} />
        </div>
      </div>
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <PlotComponent plotData={plotData} />
        </div>
        <div style={{ flex: 1 }}>
          <PlotComponent plotData={plotData} />
        </div>
      </div> */}
    </div>
  );
};

export default PlotComponentSubPage;
