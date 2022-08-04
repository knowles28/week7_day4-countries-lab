import React from 'react';
import CountryContainer from '../Container/CountriesContainer';

const GlobalPop = ({countries}) => {
    
    const totalPop = countries.reduce((acc, country) => {
        return acc + country.population
        }, 0)
    
    return totalPop
}


export default GlobalPop
