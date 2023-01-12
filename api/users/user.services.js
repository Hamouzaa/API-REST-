const res = require("express/lib/response");
const pool = require("../../config/database");

module.exports ={
    create: (data, callback)=> {
    },
    getUsers: callback=> {
    },
    getUserByUserId: (id, callback)=> {
        pool.query(
            `select id,username,password,email,number from registration where id= ?`
        
    [id],
(error, results, fields)=> {
    if (error){
        return callback(error);
    }
    return callback(null, results[0])
}     
        );  
    },
    
        updateUser: (data, callback)=> {
            pool.query(
                `update reqistration set username=?, password=?, email=?, adresse=?, number=? where id=?)`,
    [
        data.username,
        data.password,
        data.email,
        data.adresse,
        data.number,
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
        deleteUser: (data, callback)=>{
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
        getUserByUserEmail: (email, callback)=>{
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
