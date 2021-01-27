// Im not using this

import React, { useEffect, useState } from "react";

const URL = `https://restcountries.eu/rest/v2`;
const allEndpoint = "/all";

const useFetch = (...urls) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // let isMounted = true;
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL + allEndpoint);
        const data = await response.json();

        const regions = data
          .reduce((r, c) => {
            if (r.includes(c.region) || !c.region) {
              return r;
            }
            return r.concat(c.region);
          }, [])
          .sort((a, b) => (a > b ? 1 : -1));

        setCountries(data);
        setRegions(regions);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    // if (isMounted) {
    fetchCountries();
    // }

    // return () => {
    //   isMounted = false;
    // };
  }, []);

  return [countries, regions, isLoading];
};

export default useFetch;
