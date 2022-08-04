import React, {useState, useEffect} from 'react';
import CountryDetail from '../Components/CountryDetail';
import CountrySelector from '../Components/CountrySelect';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect( () => {
        getCountries()
    }, []) 

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = (country) => {
        setSelectedCountry(country)
    }

    return (
        <div>
            <h1> Countries List</h1>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        </div>
    )
};

export default CountryContainer
