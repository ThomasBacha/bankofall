import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
