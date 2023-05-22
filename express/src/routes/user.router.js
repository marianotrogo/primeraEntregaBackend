import { Router } from "express";
import userModel from "../models/users.model";

const userRouter = Router();

userRouter.get("/", async(req,res)=>{
    const users = await userModel.find();
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