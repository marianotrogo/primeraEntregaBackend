import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req,res)=>{
    res.send({hello:"world"});
});

userRouter.post("/", (req,res)=>{
    //todo
});

userRouter.put("/:userId", (req,res)=>{
    //todo
});

userRouter.delete("/:userId", (req,res)=>{
    //todo
});

export default userRouter;