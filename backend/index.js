const express = require("express");

const htmlMain = "/home/pi/webGPT/WEBSERVER/webGPT/Frontend/index.html";
const cssMain = "/home/pi/webGPT/WEBSERVER/webGPT/Frontend/style.css";
const jsMain = "/home/pi/webGPT/WEBSERVER/webGPT/Frontend/script.js";
const port = 8080;
const app = express();


app.get("/", (req, res) => {
    res.sendFile(htmlMain);
    

});

app.get("/script.js",(req, res) => {
    res.sendFile(jsMain);
});

app.get("/style.css",(req, res) => {
    res.sendFile(cssMain);
});

app.get("/api/user", (req, res) =>{
    

});
app.listen(port, () => {

    console.log("Server is listening on port "+port);

});

