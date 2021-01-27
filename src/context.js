import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const URL = `https://restcountries.eu/rest/v2`;
const allEndpoint = "/all";

const lsDarkMode = JSON.parse(localStorage.getItem("dark-mode"));

export const AppProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(lsDarkMode || false);
  const [isListboxExpanded, setIsListboxExpanded] = useState(false);
  const [regionFilter, setRegionFilter] = useState("All");

  const openListbox = () => {
    setIsListboxExpanded(true);
  };

  const closeListbox = () => {
    setIsListboxExpanded(false);
  };

  const selectOption = (val) => {
    setRegionFilter(val);
    closeListbox();
  };

  const type = (val) => {
    setTerm(val);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL + allEndpoint);
        const data = await response.json();

        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isLoading) {
        const regex = new RegExp(term, "gi");
        const filteredCountries = countries.filter((country) => {
          if (regionFilter === "All") {
            return regex.test(country.name);
          } else {
            return regex.test(country.name) && country.region === regionFilter;
          }
        });

        setFilteredCountries(filteredCountries);
      }
    }, 350);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term, regionFilter, countries, isLoading]);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        term,
        countries,
        filteredCountries,
        isLoading,
        isListboxExpanded,
        regionFilter,
        darkMode,
        openListbox,
        closeListbox,
        selectOption,
        type,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
