import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import express from "express";
import cors from "cors";

import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST","GET","PUT","DELETE"],
    credentials: true
  })
);

// parsers first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB connect
dbConnection();

// routes
app.use('/api/v1/reservation', reservationRouter);

// error middleware LAST
app.use(errorMiddleware);

export default app;

