import { Router, json } from "express";
import productManager from "../productManager";

const item = new productManager();

const viewsRouter = Router();

viewer.get("/", async(req,res)=>{
    const prods =await item.getProducts();
    console.log(prods);
    res.render("home",{prods});
})

viewer.get('/real_time_products', (req,res)=>{
    res.render('real_time_products');
})

export default viewsRouter;