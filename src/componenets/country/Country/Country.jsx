import React, { useState } from "react";
import "./country.css";

const Country = ({ country , handleVisitedCountry }) => {
  const [visited,setVisited] = useState(false);
  const handleVisited = () =>
     { 
      if (visited)
      {
      setVisited(false)
      }
      else
        {
        setVisited(true)
        }
        handleVisitedCountry ();
      }
   
    
   
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name:{country.name.common}</h3>
      <h3>
        Area:{country.area.area}
        {country.area.area > 100000 ? "Big Country" : "Small Country"}
      </h3>
      <h3>Population:{country.population.population}</h3>
      <button onClick={handleVisited}>{visited ? 'visited' : 'Not Visited'}</button>
    </div>
  );

};
export default Country;
