const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "/");

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/comcast", (req,res,next) =>{
    res.sendFile(path.join(__dirname,"comcast.html"));
});
app.get("/sandals", (req,res,next) =>{
    res.sendFile(path.join(__dirname,"sandals.html"));
});
app.get("/training", (req,res,next) =>{
    res.sendFile(path.join(__dirname,"training.html"));
});
app.get("/perlota", (req,res,next) =>{
    res.sendFile(path.join(__dirname,"perlota.html"));
});

app.listen( port, ()=>{
    console.log(`Portal open on port ${port}`);
})