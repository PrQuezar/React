import React from 'react'
import { useState } from 'react'
import './currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_EpYlPxGIhotuLHse57z6QO62InAXMJSphakWx7WO";



function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

const exchange = async() => {
//console.log({amount, fromCurrency, toCurrency});
const respons = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
const Result =(respons.data.data[toCurrency])*amount;
setResult(Result.toFixed(2));


 
}
    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter') {
            e.preventDefault(); 
            exchange(); 
        }
    };

return (
    <>
        <div>
            <h3 className='doviz'>DOVIZ KURU</h3>
        </div>
    <div className='currency-div'>

        
        <input 
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        type="Number" className='amount'
        placeholder='Miktar Giriniz' 
        onKeyDown={handleKeyDown}
        />
        <select onChange={(e)=>setFromCurrency(e.target.value)} className="from-currency-option" >
    <option value="USD">USD</option>
    <option value="AUD">AUD</option>
    <option value="BGN">BGN</option>
    <option value="BRL">BRL</option>
    <option value="CAD">CAD</option>
    <option value="CHF">CHF</option>
    <option value="CNY">CNY</option>
    <option value="CZK">CZK</option>
    <option value="DKK">DKK</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="HKD">HKD</option>
    <option value="HRK">HRK</option>
    <option value="HUF">HUF</option>
    <option value="IDR">IDR</option>
    <option value="ILS">ILS</option>
    <option value="INR">INR</option>
    <option value="ISK">ISK</option>
    <option value="JPY">JPY</option>
    <option value="KRW">KRW</option>
    <option value="MXN">MXN</option>
    <option value="MYR">MYR</option>
    <option value="NOK">NOK</option>
    <option value="NZD">NZD</option>
    <option value="PHP">PHP</option>
    <option value="PLN">PLN</option>
    <option value="RON">RON</option>
    <option value="RUB">RUB</option>
    <option value="SEK">SEK</option>
    <option value="SGD">SGD</option>
    <option value="THB">THB</option>
    <option value="TRY">TRY</option>
    <option value="ZAR">ZAR</option>
        </select>
        <div><FaLongArrowAltRight className='ok'/></div>
                <select className="to-currency-option" onChange={(e)=>setToCurrency(e.target.value)}> 
  <option value="TRY">TRY</option>
    <option value="AUD">AUD</option>
    <option value="BGN">BGN</option>
    <option value="BRL">BRL</option>
    <option value="CAD">CAD</option>
    <option value="CHF">CHF</option>
    <option value="CNY">CNY</option>
    <option value="CZK">CZK</option>
    <option value="DKK">DKK</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="HKD">HKD</option>
    <option value="HRK">HRK</option>
    <option value="HUF">HUF</option>
    <option value="IDR">IDR</option>
    <option value="ILS">ILS</option>
    <option value="INR">INR</option>
    <option value="ISK">ISK</option>
    <option value="JPY">JPY</option>
    <option value="KRW">KRW</option>
    <option value="MXN">MXN</option>
    <option value="MYR">MYR</option>
    <option value="NOK">NOK</option>
    <option value="NZD">NZD</option>
    <option value="PHP">PHP</option>
    <option value="PLN">PLN</option>
    <option value="RON">RON</option>
    <option value="RUB">RUB</option>
    <option value="SEK">SEK</option>
    <option value="SGD">SGD</option>
    <option value="THB">THB</option>
    <option value="USD">USD</option>
    <option value="ZAR">ZAR</option>
            
        </select>
        <input 
        value={result}
        type="number" className='result'
       
        />
        <button onClick={exchange}  className="hesapla">Hesapla</button>
    </div>
    
 </>
  )
}

export default Currency