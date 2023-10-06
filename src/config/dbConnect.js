import mongoose from "mongoose";

async function conectaComDataBase (){
    mongoose.connect(process.env.URL_DB);

    return mongoose.connection;
};

export default conectaComDataBase;