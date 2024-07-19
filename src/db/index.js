import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async () => {
  try{
    const connectioninstsnce = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\n MongoDB Connected !! DB HOST:${connectioninstsnce.connection.host}`);
  }
  catch(error){
    console.log("db connection error",error)
    process.exit(1);
  }
}

export default connectDB;