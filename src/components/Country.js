import React from "react";
import {Link} from 'react-router-dom'

const Country = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha3Code}`} className='widget shadow'>
      <img src={country.flag} alt={`flag of ${country.name}`} />
      <div className='widget-details'>
        <h2 className='widget-country'>{country.name}</h2>
        <h3 className='widget-population'>
          <span>Population: </span>
          {country.population}
        </h3>
        <h4 className='widget-region'>
          <span>Region: </span>
          {country.region}
        </h4>
        <h5 className='widget-capital'>
          <span>Capital: </span>
          {country.capital}
        </h5>
      </div>
    </Link>
  );
};

export default Country;
