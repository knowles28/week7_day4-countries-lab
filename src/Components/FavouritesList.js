import React from 'react';
import FavouriteItem from './FavouriteItem';

const FavouriteList = ({favouriteCountries}) => {
    const favouriteItems = favouriteCountries.map((country, index) => {
        return <FavouriteItem country={country} key={index}/> 
    
    })
    return (
    <div>
        <ul>
            {favouriteItems}
        </ul>
    </div>
    )
}




export default FavouriteList