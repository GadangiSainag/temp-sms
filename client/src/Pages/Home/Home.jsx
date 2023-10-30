/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ShowCountries from "../../Components/ShowCountries/ShowContries";

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

  useEffect(() => {
    //Runs only on the first render
    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        setCountries(Object.keys(response.data.result.pageContext.telephones));
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(countries)
  }, []);

  return (
    <div className="">
      {/* Main title */}
      <div className="card mt-16 -z-10">
        <h1 className="relative font-extrabold font-montserrat top-1/4  text-7xl pb-8 main-text">
          Tired of Using
          <br /> YOUR Number <br />
          for Registrations?
        </h1>
      </div>

      {/* <img src="https://flagsapi.com/"BR"/flat/64.png"></img> */}

      <div className="mt-8 containerBox">
        {countries.sort().map((country, index) => {
          return (
            <div key={index} className="w-56 m-4 smallCard">
              <Link to={`/en/${country}`} className="capitalize ">
                {country}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
