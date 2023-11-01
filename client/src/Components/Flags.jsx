import React from "react";
function getFlag(country) {
  return `/Flags/${country}.png`;
  //  require("./india.png").default
}

export default getFlag;
