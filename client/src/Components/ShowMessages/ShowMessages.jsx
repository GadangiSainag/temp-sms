import axios from "axios";
import { useState,useEffect } from "react";
import "./messages.css"
export default function ShowMessages(props){
    const [messages, setMessages] = useState([])
    // useEffect(() => {
    // axios
    //       .get(`http://localhost:5000/api/messages/${props.number}`)
    //       .then((response) => {
    //         console.log(Object.values(response.data))
    //         setMessages(Object.values(response.data))
    //         // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //     }, []);
    return(
        <div>
     
    {props.messages.map((message,index) =>{
     return(
        <div key={index}> 
        {/* message[0] - time
        mesage[1] - From
        message[2] - actual msg */}

        <div id="msgbox" className="msgbox">
        <h4 className=""><strong>{message[1]}</strong></h4>
        
        
        <p className=""> {message[2]}</p>
    <h3 >{message[0]}</h3>
        </div>
        
        </div>
    
)
})} 
        </div>
    )
}