const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("API chal gayi bhai mubarq ho ");
});
app.listen(8080,()=>{
    console.log("Loading ho rahi hai wait karo ");
});