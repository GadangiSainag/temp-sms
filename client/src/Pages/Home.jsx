/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import '../App.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function Home() {
  // const axiosConfig = {
  //   headers: {
  //     "content-Type": "application/json",
  //     'Accept': "*/*",
  //     'Origin' : 'https://receiveasmsonline.com'
  //       },
  //   credentials: "same-origin",
  // };
  const [countries, setCountries] = useState([]);
  axios.defaults.withCredentials = true;
  const countryIso2Codes = {
    "United States": "US",
    "Canada": "CA",
    "United Kingdom": "GB",
    "Australia": "AU",
    "Germany": "DE",
    "France": "FR",
    // Add more countries here
  };
  useEffect(() => {
    //Runs only on the first render
    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        console.log((response.data.result.pageContext.telephones.canada));
        setCountries(
          Object.keys(response.data.result.pageContext.telephones),
    );
        // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      Country list
      
      {/* <img src="https://flagsapi.com/"BR"/flat/64.png"></img> */}
      {countries.map((country, index) => {
        return (

        <a key={index} 
        href={`/en/${country}`}
        className="capitalize block"> {country}</a>
        )
      })}
    </div>
  );
}
