import express from "express";
import productManager from "./productManager";

const app = express();
let manager = new productManager("./productos.json");
app.get("/", (req,res)=>{
    res.send("<h1>Funcionando</h1>");
});
app.get("/products", async (req,res)=>{
    res.send(manager.getProducts());
});

app.get("/products/:id", async (req,res)=>{
    let num = parseInt(req.params.id);
    res.send(manager.getProducsById(num));
})

app.get("/products", async (req,res)=>{
    const product = await manager.getProducts()
    let { limit } = req.query;
    res.send(product.filter((p)=>p.id < limit));
});

app.listen(8080, ()=> console.log(`Sever listengin to port 8080`));