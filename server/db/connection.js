import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONG_URL)
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log("Error while Connnecting to DB", e));
};
