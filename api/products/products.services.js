const res = require("express/lib/response");
const pool = require("../../config/database");

module.exports ={
    create: (data, callback)=> {
    },
    getProducts: callback=> {
    },
    getProductsByProductsId: (id, callback)=> {
        pool.query(
            `select id,name,price,UserID from registration where id= ?`
    [id],
(error, results, fields)=> {
    if (error){
        return callback(error);
    }
    return callback(null, results[0])
}     
        );  
    },
    
        updateProducts: (data, callback)=> {
            pool.query(
                `update reqistration set name=?, price=?, UserID=? where id=?)`,
    [
        data.name,
        data.price,
        data.UserID,
        data.id
    ],
    (error, results, fields)=> {
        if (error){
            return callback(error);
        }
        return callback(null, results[0]);
    }     
            );  
        },
        deleteProducts: (data, callback)=>{
            pool.query(
                `delete from registration where id=?`,
                [data.id],
                (error, results, fields)=>{
                    if(error){
                       return callback(error);
                    }
                    return callback(null, results[0]);
                });
        },
        getProductsByProductsEmail: (email, callback)=>{
            pool.query(
                `Select * from registration where email=?`,
                [email],
                (error, results, fields)=>{
                    if(error){
                       return callback(error);
                    }
                    return callback(null, results[0]);
                });
        }
    };