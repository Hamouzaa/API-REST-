
require("dotenv").config();
const express = require("express");
const APP = express();
const userRouter =require("./api/users/user.router");




APP.use("/api/users", userRouter);



APP.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running on PORT: ", process.env.APP_PORT);
 });