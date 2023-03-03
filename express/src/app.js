import express from "express";
import ProductManager from "./productManager.js";

const app = express();
let manager = new ProductManager("./productos.json");
app.get("/", (req,res)=>{
    res.send("<h1>Funcionando</h1>");
});
app.get("/products", async (req,res)=>{
    res.send(manager.getProducts());
});

app.get()