import React from 'react'
/* import { CurrencyType } from '../App';
 */


export type CryptoCoinProps = {
  id: string,
  name: string,
  icon: string,
  price: number,
  priceChange1d: number
}


const CryptoCoin: React.FC<{ coin: CryptoCoinProps , currency:string}>= ( props) => {
  const { id, icon, name, price, priceChange1d } = props.coin
 
  return (<>
  
    <div>
      <p style={{ color: '#85586F' }}><strong>{name}</strong></p>
      <img src={icon} alt={id} width='50px' />
    
    </div>
   
    <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#DFD3C3', width: '100%', height: '30px', position: 'absolute', bottom: 0, borderRadius: '0 0 5px 5px' }}>
      <p style={{ margin: 0 }}>{props.currency==='INR'?'Rs.': props.currency==='USD'?'$': <span>&#8364;</span>}
      {Math.round(price) === 0 ? (price).toFixed(3) : Math.round(price)}</p>
      <span>{priceChange1d < 0 ? <span style={{ color: 'red', width: '20px', height: '20px' }}>&#x25BC;</span> : <span style={{ color: 'green', width: '40px' }}>&#x25B2;</span>}{priceChange1d}</span>
    </div>
  </>

  )
}

export default CryptoCoin