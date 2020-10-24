const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const pusher = require("pusher");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, console.log(`lisening on port: ${port}`));
