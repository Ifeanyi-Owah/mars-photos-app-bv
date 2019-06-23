var express = require("express"),
 bodyParser = require("body-parser"),
      axios = require("axios"),
      app = express();

  

    app.get("/handleApi", (req, res)=>{
        res.send("<h2>Hanle API</h2>")
    })

    app.get("/",(req, res)=>{
        res.send("<h1>This is the landing page</h1>")
    });



      app.listen(3001, ()=>{
        console.log("server runnng on PORT...");
      })