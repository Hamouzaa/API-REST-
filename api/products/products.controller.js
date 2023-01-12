const{
    create,
    getProductsByProductsId,
    getProducts,
    updateProducts,
    deleteProducts,
    getProductsByProductsEmail
}= require("./Products.services");
const { genSaltSync, hashSync, compareSync}= require("bcrypt");
const {sign}= require("jsonwebtoken");
module.exports ={
    createProducts: (req, res) =>{
    },
    getProductsByProductsId:(req, res)=> {
        const id=req.params.id;
        getProductsByProductsId(id, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if (!results){
                return res.json({
                    success:0,
                    Message:"Record not found"
                });
              }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    getProducts:(req, res)=>{
        getProducts((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    updateProducts:(req, res)=>{
        const body =req.body;
        const salt =genSaltSync(10);
        body.password= hashSync(body.password, salt);
        updateProducts(body, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message: "updated successfully"
            });
        });
    },
    deleteProducts:(req, res)=>{
        const data= req.body;
        deleteProducts(data, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record Not Found"
                });
            }
            return res.json({
                success:1,
                message:"user deleted successfully"
            });
        });
    },
    login:(req, res)=>{
        const body = req.body;
        getProductsByProductsEmail(body.email, (err, results)=>{
            if (err) {
                console.log(err);
            }
            if(!results){
                return res.json({
                    success:0,
                    data: "Invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if(result){
                results.password =undefined;
                const jsontoken =sign({result: results},"Elmoussi123",{
                    expiresIn: "1h"
                });
                return res.json ({
                    success:1,
                    message:"login successfully",
                    token:jsontoken
                });

            }
            else{
                return res.json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
        });
    },
};