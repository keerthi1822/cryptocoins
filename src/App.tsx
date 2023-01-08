import React,{ useState } from 'react';
import axios from 'axios';
import CryptoCoins from '../src/components/CryptoCoins';
import './App.css';
import SearchBar from './components/SearchBar';

function App() { 
 
  const [currency,setCurrency] = useState('INR')

  const handleChangeCurrency = (e: { target: { value: React.SetStateAction<string> } }) => {
    console.log(e.target.value)
    setCurrency(e.target.value)

}
console.log(currency)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Crypto Coins.</h2>
      </header> 
      <SearchBar  handleCurrencyChange={handleChangeCurrency}/>
    <CryptoCoins currency={currency} />
      
    </div>
  );
}

export default App;
