const path = require('path');
const fs = require('fs');


const dbProductos = path.join(__dirname, '../database/productos.json');
const readJsonFile = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    const dataParse = JSON.parse(data);
    return dataParse;
};

const productController = {
  allProducts: (req, res) => {
   const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const producto = productos.find(el => el.id == id) ? productos.find(el => el.id == id) : res.send('el producto no existe')
    res.render('products/products', {producto: producto});
  },
  productsCreate: (req, res) => {
    res.render('products/create');
  },
  productsId: (req, res) => {
    const id = req.params.id;
    res.render('products/', { id: id });
  },
  productsEdit: (req, res) => {
    const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const producto = productos.find(e => e.id==id);
    res.render('products/edit', { producto: producto });
  },
  productsNew: (req, res) =>{
    const productos = readJsonFile(dbProductos);
    const idNuevo = Date.now();
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const image = req.file ? 'images/' + req.file.filename : 'images/foto-vacia';
    const nuevoProducto = {
        'id': idNuevo,
        'nombre': name,
        'description': description,
        'price': price,
        'category': category,
        'imagen': image
    };
    productos.push(nuevoProducto)
    fs.writeFileSync(dbProductos, JSON.stringify(productos, null, 2))
    res.redirect('products');
  },
  productsPut: (req, res) => {
    let productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.file ? 'images/' + req.file.filename : false;


    productos.find(e => e.id == id).nombre = name;
    productos.find(e => e.id == id).descripcion = description;
    productos.find(e => e.id == id).precio = price;
    image ? productos.find(e => e.id == id).imagen = image : edicionImage = false;

    fs.writeFileSync(dbProductos, JSON.stringify(productos, null, 2));
    res.redirect('/products/' + id);
  },
  productsDelete: (req,res)=>{
    // falta elimianar la imagen del fs
    const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const newProductList = productos.filter(e => e.id != id);
    fs.writeFileSync(dbProductos, JSON.stringify(newProductList, null, 2));
    res.redirect('/products');
  },
  list: (req,res)=>{
    const productos = readJsonFile(dbProductos);
    res.render('products/allProducts', { productos: productos });
  },
};
module.exports = productController;
