const path = require("path");
const fs = require("fs");
const dbProductos = path.join(__dirname, "../database/productos.json");
const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParse = JSON.parse(data);
    return dataParse;
};

const productController = {
  products: (req, res) => {
   const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const producto = productos.find(el => el.id == id) ? productos.find(el => el.id == id) : res.send("el producto no existe")
    res.render("products/products", {producto: producto});
  },
  productsCreate: (req, res) => {
    res.render("products/create");
  },
  productsId: (req, res) => {
    const id = req.params.id;
    res.render("products/", { id: id });
  },
  productsEdit: (req, res) => {
    const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const producto = productos[id-1];
    res.render("products/edit", { producto: producto });
  },
  productsNew: (req, res) =>{
    const productos = readJsonFile(dbProductos);
    const id = productos[productos.length].id + 1;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    
    const nuevoProducto = {
        'id': id,
        'name': name,
        'description': description,
        'price': price,
        'category': category,
        'image': image
    };
    productos.push(nuevoProducto)
    fs.writeFileSync(dbProductos, JSON.stringify(productos, null, 2))
    res.render('products/products');
  },
  productsPut: (req, res) => {
    const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    productos[id].name = name;
    productos[id].description = description;
    productos[id].price = price;
    productos[id].category = category;
    
    fs.writeFileSync(dbProductos, JSON.stringify(productos, null, 2));
    res.render("products/products", { id: id });
  },
  productsDelete: (req,res)=>{
    res.send("soy el delete")
  }
};
module.exports = productController;
