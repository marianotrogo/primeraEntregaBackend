// const express = require ("express");
import express from "express";
import productManager from "./productManager.js";

const app = express();
let manager = new productManager("./src/productos.json");
app.get("/", (req,res)=>{
    res.send("<h1>Funcionando</h1>");
});
app.get("/products", async (req,res)=>{
    const products = await manager.getProducts();
    res.send(products);
});

app.get("/products/:id", async (req,res)=>{
    const numId = await Number(req.params.id);
    const resultado = await manager.getProductsById(numId);
    res.send(resultado);
})

// app.get("/products/:id", async (req,res)=>{
//     const num = parseInt(req.params.id);
//     res.send(manager.getProductsById(num));
// })

app.get("/products", async (req,res)=>{
    const product = await manager.getProducts()
    let { limit } = req.query;
    res.send(product.filter((p)=>p.id < limit));
});

app.listen(8080, ()=> console.log(`Sever listening to port 8080`));