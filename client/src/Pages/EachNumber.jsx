
import axios from "axios";
import React ,{useEffect, useState} from "react";

import { useParams } from "react-router-dom";

export default function EachNumber(){
    const {id,number} = useParams();
    const [messages, setMessages] = useState([])

    useEffect(() => {
        //Runs only on the first render
        axios
          .get(`http://localhost:5000/api/messages/${number}`)
          .then((response) => {
            console.log(Object.values(response.data))
            setMessages(Object.values(response.data))
            // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    function refreshPage(){
        window.location.reload(false);
    }
    return(
        <div>

This page belongs to number {number} of {id}

<br/>
<button onClick={refreshPage}>Refresh Me</button>
<br />
{messages.map((message,index) =>{
    return(
        <>
        <h2 key={index}>{message[0]}</h2>
        <h4>{message[1]}</h4>
        <p> {message[2]}</p>
    <br></br>
        </>
    
)
})}
        </div>
    )
}