const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bcrypt = require("bcrypt");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("підключено до MongoDB"))
.catch(err => console.log("помилка підключення до MongoDB", error));
