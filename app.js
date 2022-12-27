import express from 'express'
import routerProducts from './scr/routes/products.router.js'
import routerCart from './scr/routes/carts.router.js'

const app = express()
const Contenedor = require('./contenedor')
const contenedor = new Contenedor("productos.json", ["timestamp", "title", "price", "description", "code", "image", "stock"]);
const carrito = new Contenedor("carrito.json", ["timestamp", "products"])


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/productos', routerProducts);
app.use('/api/carrito', routerCart);

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(` >>>>> 🚀 App inciada Puerto:${PORT}`)
})

server.on('error', (err) => console.log(err));