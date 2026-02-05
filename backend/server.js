import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("You got 5 notes");
});

app.listen(3000, () => {
  console.log("Sever started on PORT:3000");
});
