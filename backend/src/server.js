import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rate-limiter.js";
import notesRouter from "./router/notes-router.js";

dotenv.config();

connectDB().then(() => {
  const app = express();
  const port = process.env.PORT || 3001;

  app.use(express.json());
  app.use(cors({ origin: "http://localhost:5173" }));
  app.use(rateLimiter);
  app.use("/api/notes", notesRouter);

  app.listen(port, () => {
    console.log(`Sever started on PORT:${port}`);
  });
});
