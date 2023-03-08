import express from "express";
import productRouter from "./routes/products.router.js";
import productManager from "./productManager.js";

const app = express();

app.use(express.static(__dirname + "/../public"))

app.use("/api/products", productRouter);


let manager = new productManager("./src/productos.json");
app.get("/", (req,res)=>{
    res.send("<h1>Funcionando</h1>");
});
app.get("/products", async (req,res)=>{
    const products = await manager.getProducts();
    res.send(products);
});

app.get("/products/:id", async (req,res)=>{
    let num = parseInt(req.params.id);
    res.send(manager.getProductsById(num));
})

app.get("/products", async (req,res)=>{
    const product = await manager.getProducts()
    let { limit } = req.query;
    res.send(product.filter((p)=>p.id < limit));
});

app.listen(8080, ()=> console.log(`Sever listening to port 8080`));



// import express from "express";

// const app = express();

// app.use(express.json());

// let users = [];

// app.post("/users",(req,res)=>{
//     const userData = {
//         ...req.body,
//         id: users.length,
//     };

//     if(!req.body.username || !req.body.email){
//         return res.status(400).send({error:"missing parameters"});
//     }

//     users = [...users, userData];
//     res.status(201).send(users);
// });

// app.put("/users/:id",(req,res)=>{
//     const userId = Number(req.params.id);
//     users = users.map((u)=>{
//         if(userId===u.id){
//             return{
//                 ...req.body,
//                 id: u.id,
//             };                
//         }

//         return u;
//     });
//     res.send(users)
// });

// app.delete("/users/:id", (req,res)=>{
//     const userId = Number(req.params.id);
//     users = users.filter((u)=> u.id !== userId);

//     res.send(users);
// })

// app.listen(8080, ()=>{
//     console.log("Server listening on port 8080");
// })