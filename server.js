require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const aadhaar_routes = require('./routes/aadhaarRoutes');



const app = express();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(3001);
    console.log("Server Running On Port 3001");
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json());
app.use(cors());

app.use('/aadhaar', aadhaar_routes);


app.get("/", (req, res) => {
    res.send(
      "Please write the desired url to visit different routes. Have a Nice Day"
    );
  });
  