import React from "react";
import { useParams } from "react-router-dom";
export default function Country() {
  const {id} = useParams();
  
  return <div>This is a country page !! {id}</div>;
}
