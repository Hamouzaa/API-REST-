const { createProducts,
    getProductsByProductsId,
     getProducts,
      updateProducts,
      deleteProducts,
      login
} = require("./Products.controller");
const router =require ("express").Router();
const {checkToken}=require("../../auth/token_validation");

router.post("/", checkToken, createProducts);
router.get("/", checkToken , getProducts);
router.get("/:id",  checkToken, getProductsByProductsId);
router.patch("/", checkToken, updateProducts);
router.delete("/", checkToken, deleteProducts);


router.post("/login",login);
module.exports = router;
