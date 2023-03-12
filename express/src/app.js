import express from "express";
import productManager from "./productManager.js";
import cartRouter from "./routes/cart.router.js"


// import express from "express";
// import productManager from "./productManager.js";
// import uploader from "./fileUpload.js";

// const app = express();
// app.use(express.static("public"));
// let manager = new productManager("./src/productos.json");


// app.post('/prod', uploader.single('file'), (req,res)=>{
//     if(!req.file){
//         return res.status(400).send("File Required");
//     }
// })

// app.get("/", (req,res)=>{
//     res.send("<h1>Funcionando</h1>");
// });

// app.get("/products", async (req,res)=>{
//     const {limit} = req.query;
//     const productos = await manager.getProducts();
//     if(!limit){
//         await res.send(productos);
//     }
//     const filtrado = productos.splice(0,limit);
//     await res.send(filtrado);
// });

// app.get("/products/:id", async (req,res)=>{
//     const numId = await Number(req.params.id);
//     const resultado = await manager.getProductsById(numId);
//     res.send(resultado);
// })


// app.listen(8080, ()=> console.log(`Sever listening to port 8080`));