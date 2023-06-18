import {useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import plotData from './app/plotData';
import PlotComponent from './components/PlotComponent';
import tableData from './app/tableData';
import ValueCardSubPage from './pages/ValueCardSubPage';
import PlotComponentSubPage from './pages/PlotComponentSubPage';
import SearchBox from './components/SearchBox';
import Search from './components/Search';
import StockPlot from './components/StockPlot';

function App() {
  console.log(tableData)
  console.log(plotData)
  const [symbol, setSymbol] = useState('IBM');  // default symbol

  const dispatch = useDispatch();

  

  return (
    
    <div className="App">
      
      <Header />
      <Search setSymbol={setSymbol} />
      <ValueCardSubPage/>
      
      <StockPlot symbol={symbol} />    
      {/* <PlotComponentSubPage/>       */}
      <Footer />      
    </div>
    
  );
}

export default App;
