//Importing Libraries
const express = require('express');
const app = express();
const db = require('./db.json');
const PORT = process.env.PORT || 4500;


app.get('/',(req,res)=>{
    res.send(db);
})

app.use(express.urlencoded({ extended: false }))
app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`);
  })
