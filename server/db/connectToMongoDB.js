import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to MONGODB");
  } catch (error) {
    console.error(error.message, "Error connecting to MONGODB");
  }
};

export default connectToMongoDB;
