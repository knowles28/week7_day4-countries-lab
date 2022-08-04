import React from 'react';
import CountryContainer from '../Container/CountriesContainer';


const CountryDetail = ({selectedCountry}) => {
    return(
        <div>
            <h3>{selectedCountry.name.common}</h3>
        </div>
    )
}





export default CountryDetail;