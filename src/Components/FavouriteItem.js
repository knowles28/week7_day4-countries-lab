import React from "react";
import './FavouriteItem.css';



const FavouriteItem = ({country}) => {

    return (
        <div className="fave-country">
            <h2>{country.name.common}</h2>
            <img class="flag" src={country.flags.svg}/>
            <h5>Capital: {country.capital}</h5>
            <h5>Population: {country.population}</h5>
        </div>

    )
    
}

export default FavouriteItem;