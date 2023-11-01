import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function EachNumber() {
  const { id, number } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //Runs only on the first render
    document.title = `${id.toUpperCase()} +${number}`;
    axios
      .get(`http://localhost:5000/api/messages/${number}`)
      .then((response) => {
        console.log(Object.values(response.data));
        setMessages(Object.values(response.data));
        // setData(JSON.stringify(response.data.result.pageContext.telephones.australia))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      This page belongs to number {number} of {id}
      <br />
      <button onClick={refreshPage}>Refresh Me</button>
      <br />
      {messages.map((message, index) => {
        return (
          <>
            {/* message[0] - time
        mesage[1] - From
        message[2] - actual msg */}

            <div className="w-96">
              <h2 key={index}>{message[0]}</h2>
              <h4 className="font-bold">{message[1]}</h4>
              <p> {message[2]}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
