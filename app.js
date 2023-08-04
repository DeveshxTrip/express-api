const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Bann gayi api bhai Mubaraq ho");
});
app.listen(8080,()=>{
    console.log("Loading ho rahi hai wait karo ");
});