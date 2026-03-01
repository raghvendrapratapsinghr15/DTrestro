import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "dtrestro",
    });
    console.log("Connected to database successfully!");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default dbConnection;