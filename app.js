var express = require("express"),
 bodyParser = require("body-parser"),
       PORT = process.env.PORT || 3001;
      axios = require("axios"),
      cors  = require("cors"),
      app = express();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.use(cors());

  
   
    // app.post("/search", (req, res)=>{
    //   if(req.body.sol !==" " && req.body.camera !==" " ){
    //      res.redirect("/handleApi");
    //   }
     
    // })
    
    app.get("/handleApi", (req, res)=>{
       axios.get("https://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?sol=1000")
        .then(function(response){
            // console.log(response.data);
            res.json(response.data);
        })
        .catch(function(err){
            res.status(400).json('unable to connect');
            console.log(err);
        })
      
    })

    app.get("/",(req, res)=>{
        res.send("<h1>This is the landing page</h1>");
    });



      app.listen(PORT, ()=>{
        console.log("server runnng on PORT..." + PORT);
      })