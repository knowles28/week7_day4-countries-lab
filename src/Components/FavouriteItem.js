import React from "react";


const FavouriteItem = ({country}) => {

    return <li>{country.flag} {country.name.common}</li>
}

export default FavouriteItem;