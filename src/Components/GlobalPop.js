import React from 'react';
import CountryContainer from '../Container/CountriesContainer';

const GlobalPop = ({countries}) => {
    
    // const populationTotal = () => {
        // const totalPop = 0

        // for (const country in countries){
        //     totalPop += country.population
        // }
        // return totalPop

    const totalPop = countries.reduce((acc, country) => {
        return acc + country.population
        }, 0)
    
    return totalPop
}


export default GlobalPop

// const sum = arr.reduce((accumulator, object) => {
//     return accumulator + object.salary;
//   }, 0);
