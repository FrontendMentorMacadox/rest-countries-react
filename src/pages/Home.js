import React from "react";
import { FaCaretDown } from "react-icons/fa";

import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import Listbox from "../components/Listbox";
import ListboxOption from "../components/ListboxOption";
import ListboxTrigger from "../components/ListboxTrigger";

import { useGlobalContext } from "../context";

const regions = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

const Home = () => {
  const {
    regionFilter,
    isListboxExpanded,
    openListbox,
    closeListbox,
    selectOption,
    filteredCountries,
  } = useGlobalContext();

  return (
    <main>
      <section className='section section-filter'>
        <Search />
        <div className='region-filter'>
          <ListboxTrigger
            onClick={isListboxExpanded ? closeListbox : openListbox}
          >
            {regionFilter === "All" ? "Filter by Region" : regionFilter}{" "}
            <FaCaretDown />
          </ListboxTrigger>
          {isListboxExpanded && (
            <Listbox>
              {regions.map((reg) => {
                return (
                  <ListboxOption
                    key={reg}
                    val={reg}
                    className={`${
                      regionFilter === reg ? "listbox-option--selected" : ""
                    }`}
                    onClick={() => selectOption(reg)}
                  />
                );
              })}
            </Listbox>
          )}
        </div>
      </section>
      <section
        className={`section section-countries ${
          filteredCountries.length < 3 ? "section-countries--few-results" : ""
        }`}
      >
        <CountriesList />
      </section>
    </main>
  );
};

export default Home;
