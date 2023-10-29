import React , {useRef} from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../ShowCountries/countries.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function ShowCountries(props) {
    // const ref = useRef();
const [countries, setCountries] = useState([]);
const [liveCountry, setLiveCountry] = useState(useParams().id)

  useEffect(() => {
    //Runs only on the first render
    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        
        // (Object.keys(response.data.result.pageContext.telephones))
          setCountries(Object.keys(response.data.result.pageContext.telephones))
      })
      .catch((err) => {
        console.log(err);
      });
      setTimeout(()=>{
        if(liveCountry){
            document.getElementById(`${liveCountry}`).scrollIntoView({ behavior: 'smooth' });
    
          }
      }, 500)
      
  }, []);
  
  
  // setCountries()
  return (
    <div>
      <div className=" countriesBox">
        {countries.sort().map((country, index) => {
          return (
            <div 
            id={`${country}`}
            key={index} 
            className={liveCountry===country ? "countryCard active" : "countryCard"}
            // ref={liveCountry===country && ref}
            >
             
              <a  onClick={() =>{
                setLiveCountry(country)
                props.changeCountry(country)
                window.history.replaceState(null, "", `/${country}`)
              }} className="capitalize">

                {country}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
