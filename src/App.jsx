import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Customer from './components/Customer';
import Order from './components/Order';
import Promotion from './components/Promotion';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState('menu'); // Default view is 'menu'

  const renderView = () => {
    switch (view) {
      case 'menu':
        return <Menu />;
      case 'customer':
        return <Customer />;
      case 'order':
      return <Order />;
        case 'promotion':
      return <Promotion />;
        case 'contact':
        return <Contact />;
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      default:
        return <Menu />;
    }
  };

  return (
    <div className="App">
      <Header setView={setView} />
      <div className="container mt-4">
        {renderView()}
      </div>
      <Footer />
    </div>
  );
}

export default App
