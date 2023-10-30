import React from "react";
function getFlag(country){

    return `/public/Flags/${country}.png`
    //  require("./india.png").default
}

export default getFlag ;