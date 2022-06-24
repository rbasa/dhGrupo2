const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mainRoutes = require('./routes/mainRoutes')
const productRoutes = require('./routes/productRoutes')
const path=require('path');
const methodOverride = require('method-override');

app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"/views"));
app.listen(PORT, ()=>{
    console.log(`Server running ar port ${PORT}`);
});


app.use("/", mainRoutes);
app.use("/products", productRoutes);
app.use("/login", mainRoutes);
app.use("/register", mainRoutes);
app.use("/cart", mainRoutes);