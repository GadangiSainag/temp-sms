import React from "react";
import { useEffect } from "react";
import axios from "axios";
export default function Home() {
  const axiosConfig = {
    headers: {
      "content-Type": "application/json",
      'Accept': "/"
    },
    credentials: "same-origin",
  };
  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    //Runs only on the first render
    axios
      .get(
        "https://receiveasmsonline.com/page-data/india/page-data.json",axiosConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return <div>This is home .</div>;
}

