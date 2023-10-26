import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Country() {
  const { id } = useParams();
  const [numbs, setNumbs] = useState([]);
  
  useEffect(() => {
    //Runs only on the first render
    document.title=`${id.toUpperCase()}`
    axios
      .get("http://localhost:5000/api/allNumbers")
      .then((response) => {
        setNumbs(response.data.result.pageContext.telephones[id]);

        // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      This is a country page !! {id}
      {numbs.map((eachNumber, index) => {
        return (
          <a 
          key={index} 
          href={`/en/${id}/number/${eachNumber}`}
          className="block" >
            +{eachNumber}
          </a>
        );
      })}
    </div>
  );
}
