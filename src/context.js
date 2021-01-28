import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const URL = `https://restcountries.eu/rest/v2`;
const allEndpoint = "/all";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export const AppProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(getStorageTheme());
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

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
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
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        term,
        countries,
        filteredCountries,
        isLoading,
        isListboxExpanded,
        regionFilter,
        theme,
        openListbox,
        closeListbox,
        selectOption,
        type,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
