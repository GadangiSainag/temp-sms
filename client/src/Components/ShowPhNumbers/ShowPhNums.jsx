import React from "react";
import { useState } from "react";

import "./numbers.css";
export default function ShowPhNumbers(props) {
  const [activeNumber, setLiveNumber] = useState("");
  return (
    <div>
      {props.allNumbs.map((eachNumber, index) => {
        return (
          <div
            key={index}
            className={
              activeNumber === eachNumber ? "listItem activePhNO" : "listItem"
            }
            onClick={() => {
              props.getMessages(eachNumber);
              setLiveNumber(eachNumber);
            }}
          >
            <a
              // href={`/en/${id}/number/${eachNumber}`}
              className=".a"
            >
              +{eachNumber.substring(0, 2) + " " + eachNumber.substring(2)}
            </a>
          </div>
        );
      })}
    </div>
  );
}
