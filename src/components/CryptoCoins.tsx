import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCoin from './CryptoCoin';

export interface CoinsListProps {
  Coins: CryptoCoinProps[];
 }

export type CryptoCoinProps = {
  id: string,
  name: string,
  icon: string,
  price: number,
  priceChange1d: number
}

export interface CurrencyType {
  currency: string;
}

const CryptoCoins = ({currency}:CurrencyType) => {

  const [cryptoCoinsData, setcryptoCoinsData] = useState([])

  useEffect(() => {
    axios.get(`https://api.coinstats.app/public/v1/coins?currency=${currency}`)
      .then((response: any) => setcryptoCoinsData(response.data.coins))
  }, [currency])
  //https://api.coinstats.app/public/v1/markets?coinId=bitcoin
  console.log(`https://api.coinstats.app/public/v1/coins?currency=${currency}`)
 console.log(currency)
  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', margin: '0 5% 0 5%' }}>
     
        {cryptoCoinsData.length && cryptoCoinsData.map((coin: CryptoCoinProps) => (
          <li style={{ listStyle: 'none', height: '200px', width: '300px', margin: '5px', backgroundColor: '#F8EDE3', position: 'relative', borderRadius: '5px' }}>
            <CryptoCoin currency={currency}  key={coin.id}  coin={coin}  />
          </li>))}

      </ul>

    </div>
  )
}

export default CryptoCoins