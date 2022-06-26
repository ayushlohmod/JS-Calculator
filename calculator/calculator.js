const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/" , function(req ,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var ans = num1 + num2;

    res.send("The answer is " + ans);
});

app.listen(4000 , function(){
    console.log("server is running on port 4000");
});