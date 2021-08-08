// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();
app.use(bodyParser(urlencoded({extended:true})));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const sum = num1 + num2;
    res.send(`The sum is ${sum}`);
})

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    const bmiCalc = weight / (height ** 2);
    res.send("Bmi is: " + bmiCalc);
})

app.listen(port, () => {
    console.log("server is running on port 3000");
})