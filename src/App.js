import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import SedeList from './SedeList';
import Header from "./components/Header"
import Carrousel from './components/Carrousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrousel/>
        
    </div>
  );
}

export default App;
