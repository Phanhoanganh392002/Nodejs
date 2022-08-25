const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port,function ()
{console.log("Sever is running...");
})

app.get("/",function (req,res){
    res.send("Hello World!");
})
app.get("/bong-da",function (req,res){
    res.send("Bóng đá 24h");
})
