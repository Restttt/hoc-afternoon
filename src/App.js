import React, { Component } from 'react';
import './App.css';

import ExchangedCurrency from './components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <div>
        <ExchangedCurrency />
      </div>
    );
  }
}

export default App;
