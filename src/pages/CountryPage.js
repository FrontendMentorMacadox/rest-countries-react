import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { numberWithCommas } from "../utils";

import Loading from "../components/Loading";
import Error from "../pages/Error";
const URL = `https://restcountries.eu/rest/v2`;
const codeEndpoint = "/alpha";

const CountryPage = () => {
  const { code } = useParams();
  const [countryLoading, setCountryLoading] = useState(true);
  const [country, setCountry] = useState(null);

  const { isLoading, countries } = useGlobalContext();

  useEffect(() => {
    setCountryLoading(true);
    const fetchCountry = async () => {
      try {
        const response = await fetch(`${URL}${codeEndpoint}/${code}`);
        const data = await response.json();
        if (data) {
          setCountry(data);
        } else {
          setCountry(null);
        }
        setCountryLoading(false);
      } catch (e) {
        console.log(e);
        setCountryLoading(false);
      }
    };
    fetchCountry();
  }, [code]);

  useEffect(() => {});

  if (isLoading || countryLoading) {
    return <Loading />;
  }
  if (!country || country.status === 404) {
    return <Error />;
  }

  return (
    <section className={`section section-country`}>
      <Link to='/' className='btn shadow back-btn'>
        <FaLongArrowAltLeft />
        Back
      </Link>
      <div className='country-details'>
        <img src={country.flag} alt={`flag of ${country.name}`} />
        <div className='country-details-content'>
          <h2>{country.name}</h2>
          <div className='country-info'>
            <div className='country-info-left'>
              <p>
                <span>Native Name: </span> {country.nativeName}
              </p>
              <p>
                <span>Population: </span> {numberWithCommas(country.population)}
              </p>
              <p>
                <span>Region: </span> {country.region}
              </p>
              <p>
                <span>Sub Region: </span> {country.subregion}
              </p>
              <p>
                <span>Capital: </span> {country.capital}
              </p>
            </div>
            <div className='country-info-right'>
              <p>
                <span>Top Level Domains: </span>
                {country.topLevelDomain.join(", ")}
              </p>
              <p>
                <span>Currencies: </span>
                {country.currencies
                  .reduce((red, cur) => (red += ", " + cur.name), "")
                  .slice(2)}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages
                  .reduce((red, lan) => (red += ", " + lan.name), "")
                  .slice(2)}
              </p>
            </div>
          </div>
          <div className='border-countries'>
            <p>Border Countries:</p>
            <ul className='border-countries-list'>
              {country.borders.map((border) => {
                const countryName = countries.find(
                  (c) => c.alpha3Code === border
                ).name;
                return (
                  <li key={border}>
                    <Link
                      className='btn shadow btn-border'
                      to={`/country/${border}`}
                    >
                      {countryName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryPage;
