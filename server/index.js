import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routers/shop.js";
import authRouter from "./routers/authRouter.js";
import { connectDB } from "./db/connection.js";

dotenv.config();
const port = process.env.PORT;

const app = express();

//  midlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(authRouter);

connectDB();

// server create
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
