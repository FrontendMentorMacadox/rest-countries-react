import React from "react";
import Country from "./Country";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CountriesList = () => {
  const { filteredCountries, isLoading } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {filteredCountries.map((country) => {
            return <Country key={country.alpha3Code} country={country} />;
          })}
        </>
      )}
    </>
  );
};

export default CountriesList;
