import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ShowMessages from "../../Components/ShowMessages/ShowMessages";
import "../CountryPage/countryPage.css";
import ShowPhNumbers from "../../Components/ShowPhNumbers/ShowPhNums";
import ShowCountries from "../../Components/ShowCountries/ShowContries";
import Instructions from "../../Components/Instructions/Instructions";
export default function Country() {
  const { id } = useParams();
  const [countries, setCountries] = useState([]);
  const [numbs, setNumbs] = useState([]);
  const [liveCountry, setLiveCountry] = useState(id);
  const [phNumber, setNumber] = useState();
  const [messages, setMessages] = useState([]);
  const isWindowsPlatform = /win/i.test(navigator.platform);

  useEffect(() => {
    // console.log(isWindowsPlatform);
    //Runs only on the first render
    // 
    getNumbers(liveCountry);

    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        const respData = response.data.result.pageContext.telephones;
        setCountries(Object.keys(respData)); //country list array
        // console.log(countries)
        // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
      })
      .catch((err) => {
        console.log(err);
      });

    //   axios
    //   .get("http://localhost:5000/api/allNumbers")
    //   .then((response) => {

    //     setCountries(
    //       Object.keys(response.data.result.pageContext.telephones),
    // );
    //     // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  function getNumbers(country) {
    setLiveCountry(country);
 document.title=`${country.toUpperCase()}`
    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        const countryNums =
          response.data.result.pageContext.telephones[country];
        setNumbs(countryNums);
        // console.log(countryNums);
        // console.log(numbs);
      })
      .catch((err) => {
        console.log(err);
      });
     
  }
  function getMessages(phNO) {
    axios
      .get(`http://localhost:5000/api/messages/${phNO}`)
      .then((response) => {
        // console.log(Object.values(response.data));
        setMessages(Object.values(response.data));
        // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function refreshPage(){
    window.location.reload(false);
}
  function handleClick(phNo) {
    // getMessages(phNo)
    // setNumber(phNo)
    // window.location.href = `/en/${id}/number/${phNo}`;
    // console.log("hello", phNo)
  }
  function changeCountry(country) {}

  return (
    <div className="font-montserrat fullScreen flex">
    <div className="absolute logo" onClick={()=> window.location.href = '/home'}>
    <img src="/Logo.png" className="logoImg" />
      <p className="brandName font-bold">TempSMS</p>

    </div>
      

      <div className="countryContainer">
        <ShowCountries countries={countries} changeCountry={getNumbers} />
      </div>
      <span className="combined flex">
        <div className="phoneNumbersContainer">
          {/* all phone numbers */}
          <ShowPhNumbers allNumbs={numbs} getMessages={getMessages} />{" "}
        </div>
        <div className="msgsContainer">
        <button onClick={getMessages}>Refresh Me</button>
          {/* Shows all messages */}
          {messages.length > 0 ? (
            <ShowMessages messages={messages} />
          ) : (
            <Instructions />
          )}
        </div>
      </span>
    </div>
  );
}
