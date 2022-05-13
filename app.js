const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log(`Server running ar port ${PORT}`);
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/home.html")
});