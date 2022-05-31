const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mainRoutes = require('./routes/mainRoutes')

app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log(`Server running ar port ${PORT}`);
});

app.use("/", mainRoutes);
app.use("/login", mainRoutes);
app.use("/register", mainRoutes);
app.use("/products", mainRoutes);
app.use("/cart", mainRoutes);