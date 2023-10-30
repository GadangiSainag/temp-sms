const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
//Setting up CORS confifguration to not to interfere in between
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    
  }));
// For fetching all countries with available numbers (it fetches everything)
app.get("/api/allNumbers", async (req, res) => {
  try {
    const numbers  = await axios.get("https://receiveasmsonline.com/page-data/india/page-data.json");
    res.json(numbers.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

//For fetching all messages recieved by a particular number
app.get("/api/messages/:phNumber" , async(req,res) =>{
  const phNumber =req.params.phNumber
  try {
    const messages = await axios.get(`https://gvg3y3xp63.execute-api.eu-west-1.amazonaws.com/dev/getsms/${phNumber}`);
    res.json(messages.data.payload);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
