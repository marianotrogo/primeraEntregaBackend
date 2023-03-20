import { Router, json } from "express";
import productManager from "../productManager.js";

const item = new productManager();

const viewsRouter = Router();

viewsRouter.get("/", async(req,res)=>{
    const prods =await item.getProducts();
    console.log(prods);
    res.render("home",{prods});
})

viewsRouter.get('/real_time_products', (req,res)=>{
    res.render('real_time_products');
})

export default viewsRouter;