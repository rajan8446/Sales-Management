import React, { useEffect, useState } from 'react';
import sales from './sales.json'
import axios from 'axios';
import { calculateTotalSale, calculateTotalCashSale, calculateCreditCardSale, calculateBuyerWithMostSale } from './Reports'

const App = () => {
  const [val, setVal] = useState({});

  useEffect(() => {
    axios.get({ sales })
      .then(res => setVal(res.data))
      .catch(err => console.log(err))
  }, [val])

  return (
    <div className="container">
      <h1>Sales Management App</h1>
      <div className="flex-row">
        <div>
          <div className="flex-large">
            <h2>Total Sale</h2>
            <p> {calculateTotalSale(sales)} </p>
          </div>
          <div className="flex-large">
            <h2>Total Cash Sale</h2>
            <p> {calculateTotalCashSale(sales)}</p>
          </div>
          <div className="flex-large">
            <h2>Total Credit Card Sale</h2>
            <p> {calculateCreditCardSale(sales)} </p>
          </div>
          <div className="flex-large">
            <h2>Buyer Name With Most Sale</h2>
            <p> {calculateBuyerWithMostSale(sales)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
