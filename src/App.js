import { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const API_URL = 'http://localhost:3000/exchangeratesapi-mock.json';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  //const 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(
        data => { 
          setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        },
        error => { console.log(error); }
      )
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div>=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </>
  );
}

export default App;
