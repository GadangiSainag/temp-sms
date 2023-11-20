const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();
//Setting up CORS confifguration to not to interfere in between

// app.use(
//   cors({
//     origin: "http://localhost:5173", //http://172.16.2.46:5173/ localhost:5173
//     credentials: true,
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
//   })
// );
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://172.16.4.173:8080"); // Replace with your allowed origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Set whether credentials (cookies, HTTP authentication) can be included in the request
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

// For fetching all countries with available numbers (it fetches everything)
app.get("/api/allNumbers", async (req, res) => {
  try {
    const numbers = await axios.get(
      "https://receiveasmsonline.com/page-data/india/page-data.json"
    );
    res.json(numbers.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

//For fetching all messages recieved by a particular number
app.get("/api/messages/:phNumber", async (req, res) => {
  const phNumber = req.params.phNumber;
  try {
    const messages = await axios.get(
      `https://gvg3y3xp63.execute-api.eu-west-1.amazonaws.com/dev/getsms/${phNumber}`
    );
    res.json(messages.data.payload);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});
// console.log(process.env.SERVER_VITE)
app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
  console.log(`Proxy server is running on port ${process.env.SERVER_PORT}`);
});
