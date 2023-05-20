import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import plotData from './app/plotData';
import PlotComponent from './components/PlotComponent';


function App() {
  return (
    <div className="App">
      <Header />
      <PlotComponent plotData={plotData} />
      <Footer />      
    </div>
  );
}

export default App;
