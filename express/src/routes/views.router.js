import { Router } from "express";

const router = Router();

router.get('/', (req,res)=>{
    const user = {
        firstName: "Franco",
        lastName: "Jalil",
    };
    res.render("home", user);

});
router.get('/foods', (req,res)=>{
    const foods=[
        {name: "manzana", price: 20},
        {name:"banana", price:10},
        {name:"naranja", price:23},
    ]

    const user = {
        firstName:"franco",
        lastName: "jalil",
        isAdmin: true,
    }

    res.render("foods", {foods, isAdmin: user.isAdmin})
})

export default router;