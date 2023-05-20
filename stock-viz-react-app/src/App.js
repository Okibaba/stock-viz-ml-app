import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import plotData from './app/plotData';
import PlotComponent from './components/PlotComponent';
import tableData from './app/tableData';
import DataTableComponent from './components/DataTableComponent';


function App() {

  return (
    <div className="App">
      <Header />
      <PlotComponent plotData={plotData} />
      <DataTableComponent data={tableData} />
      <Footer />      
    </div>
  );
}

export default App;
