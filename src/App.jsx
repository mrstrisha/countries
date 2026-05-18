import React, { Suspense } from "react";
import Countries from "./componenets/country/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",)
.then((res) => res.json());
function App() {
  return (
    <>
      <div>
        <Suspense fallback={<p>Nadir is Waiting...</p>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
