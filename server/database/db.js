import mongoose from "mongoose";


const Connection = () =>{
   const MONGODB_URI = 'mongodb+srv://anjalikashi08:useridmongo@cluster1.um505qt.mongodb.net/';


    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })
    mongoose.connection.on('disconnected',() => {
        console.log('Database Disconnected');
    })
    mongoose.connection.on('error',() => {
        console.log('Error while connecting with database', error.message);
    })
}

export default Connection;