import { EventType } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

export interface handleCurrencyProps {
    handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar = ({ handleCurrencyChange }: handleCurrencyProps) => {
    
    const CountriesCurrencies: string[] = ['INR', 'USD', 'EUR']

    return (
        <div style={{ backgroundColor: '#85586F', height: '10vh',textAlign:'left',margin:'2% 0'}}>
            <section>
                <p style={{color:'white',margin:0,padding:'20px'}}> {"Price by"}
                    <select style={{margin:'10px'}} onChange={handleCurrencyChange}>

                        {CountriesCurrencies.map((currency,i) => <option key={i} value={currency}>{currency}</option>)}

                    </select></p>

            </section>

        </div>
    )
}

export default SearchBar