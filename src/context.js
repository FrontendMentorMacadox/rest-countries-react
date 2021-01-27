import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const URL = `https://restcountries.eu/rest/v2`;
const allEndpoint = "/all";

export const AppProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL + allEndpoint);
        const data = await response.json();

        setCountries(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <AppContext.Provider value={{ term, countries, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
