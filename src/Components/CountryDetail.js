import React from 'react';
import './CountryDetail.css';

import CountryContainer from '../Container/CountriesContainer';


const CountryDetail = ({selectedCountry, onFavouriteSelected}) => {

    return(
        <div className="selected-country">
            <h1>Selected Country:</h1>
            <h2>{selectedCountry.flag}</h2>
            <h2>{selectedCountry.name.common}</h2>
            <h5>Officially Called: {selectedCountry.name.official}</h5>
            <h5>Capital: {selectedCountry.capital}</h5>
            <h5>Population: {selectedCountry.population}</h5>

            <button onClick={onFavouriteSelected}>Add to Favourites</button>

        </div>
    )
}




export default CountryDetail;