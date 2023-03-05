import { Router, json } from "express";

let productos = [];

const productRouter = Router();
productRouter.use(json());

productRouter.get("/", (req, res)=>{
    res.send(productos);
});

productRouter.post("/", (req,res)=>{
    const { username, email } = req.body;
    const newProduct = {username,email};
    productos = {...productos, newProduct};

    res.send(newProduct);
})

export default productRouter;