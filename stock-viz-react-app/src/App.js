import React from 'react';
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


function App() {
  console.log(tableData)
  console.log(plotData)

  return (
    <div className="App">
      
      <Header />
      <SearchBox/>
      <ValueCardSubPage/>      
      <PlotComponentSubPage/>
      
      
      {/* <DataTableComponent data={tableData} /> */}
      <Footer />      
    </div>
  );
}

export default App;
