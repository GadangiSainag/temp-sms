/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../ShowCountries/countries.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import setFlag from "../Flags";

export default function ShowCountries(props) {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState({});
  const [liveCountry, setLiveCountry] = useState(useParams().id);

  useEffect(() => {
    //Runs only on the first render
    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        setData(response.data.result.pageContext.telephones);
        // (Object.keys(response.data.result.pageContext.telephones))
        setCountries(Object.keys(response.data.result.pageContext.telephones));
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      if (liveCountry) {
        document
          .getElementById(`${liveCountry}`)
          .scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
    //   console.log(countries)
  }, []);

  // setCountries()
  return (
    <div>
      <div className=" countriesBox">
        {countries.sort().map((country, index) => {
          return (
            <div
              id={`${country}`}
              onClick={() => {
                setLiveCountry(country);
                props.changeCountry(country);
                window.history.replaceState(null, "", `/en/${country}`);
              }}
              key={index}
              className={
                liveCountry === country ? "countryCard active" : "countryCard"
              }
              // ref={liveCountry===country && ref}
            >
              <div className="flagContainer relative">
                <img
                  src={setFlag(country)}
                  className="flag  border-red-100 border-2"
                ></img>
                <span className="badge"> {data[country].length}</span>
              </div>
              <a className="capitalize name">{country}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
