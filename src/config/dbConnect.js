import mongoose from "mongoose";
import dotenv from "dotenv/config.js";

async function conectaComDataBase (){
    mongoose.connect(process.env.URL_DB);

    return mongoose.connection;
};

export default conectaComDataBase;