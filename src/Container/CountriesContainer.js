import React, {useState, useEffect} from 'react';
import CountryDetail from '../Components/CountryDetail';
import CountrySelector from '../Components/CountrySelect';
import GlobalPop from '../Components/GlobalPop';
import FavouriteList from '../Components/FavouritesList';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

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

    const onFavouriteSelected = () => {
        // event.preventDefault();
        const copyFaves = [...favouriteCountries];
        copyFaves.push(selectedCountry)
        setFavouriteCountries(copyFaves);
    }


    return (
        <div>
            <h1> Countries List</h1>
            <h5> Total Global Population: <GlobalPop countries={countries} /> </h5> 
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} onFavouriteSelected={onFavouriteSelected}/> : null}
            <h3>Favourites: <FavouriteList favouriteCountries={favouriteCountries} /> </h3>

        </div>
    )
};

export default CountryContainer
