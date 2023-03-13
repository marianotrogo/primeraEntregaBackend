import { Router, json } from "express";
import __dirname from "../utils.js";
import productManager from "../productManager.js";


const productRouter = Router();
let manager = new productManager(__dirname +"../productos.json");
productRouter.use(json());

productRouter.get("/", async (req, res)=>{
    try{
        const products = await manager.getProducts();
        const {limit}=req.query;

        if(limit){
            products.lenght = limit;
            return res.send(products);
        }else{
            res.send(products);
        }
    }catch(e){
        res.status(404).send(`${e}`);
    }
});

productRouter.get("/:pid", async(req,res)=>{
    let num = parseInt(req.params.pid);
    const products =await manager.getProductsById(num);
    res.send(products);
});

productRouter.post("/", async(req,res)=>{
    const { title, description, price, thumbnail, code, stock } = req.body;
    const newProduct = await manager.addProduct({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    });
    res.send(newProduct);
});

productRouter.put("/:pid", async (req,res)=>{
    let pid = parseInt(req.params.pid);
    const { title, description, price, thumbnail, code, stock, category} = req.body;
    const updated = await manager.updateProduct(
        pid,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        category
    );
    res.send(updated);
});

productRouter.delete("/:pid", async (req,res)=>{
    let pid = parseInt(req.params.pid);
    const deleteProduct = await manager.deleteProduct(pid);
    res.send(deleteProduct);
})

export default productRouter;