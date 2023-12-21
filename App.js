//jshint eversion:6


const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", function(req,res){
 var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0){
        res.send("free free free");
    }
    else {
        res.send("work work work")
    }
});

app.listen(4000, function(){
    console.log("Server stasrted");

})