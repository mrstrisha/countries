import React, { use, useState } from "react";
import Country from "./Country/Country";
import './countries.css';

const Countries = ({ countriesPromise }) => {
  const [visitedCountries , setVisitedCountries] = useState([]);
  const  handleVisitedCountry = (country) =>{
  console.log('handle visited Country clicked',country);
  const newVisitedCountries =[...visitedCountries,country];
  setVisitedCountries(newVisitedCountries);
}

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      <h3>Total Country Visited:{visitedCountries.length} </h3>
      <div className = 'countries'>
             {
countries.map(country =><Country
    key={country.cca3.cca3} 
      handleVisitedCountry={handleVisitedCountry}
       country={country}></Country>)
      }
      </div>
      
 
    </div>
  );
}

export default Countries;
