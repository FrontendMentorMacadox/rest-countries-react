import React from "react";

import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import Listbox from "../components/Listbox";

const Home = () => {
  return (
    <main>
      <section className='section section-filter'>
        <Search />
        <Listbox />
      </section>
      <section className='section section-countries'>
        <CountriesList />
      </section>
    </main>
  );
};

export default Home;
