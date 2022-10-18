import express from "express";
const app = express();

app.get("/product", (req, res) => {
  res.status(200).json({ name: "Francisco" });
});

app.post("/product", (req, res) => {
  res.status(200).json({ name: "Francisco" });
});

app.put("/product", (req, res) => {
  res.status(200).json({ name: "Francisco" });
});

app.delete("/product", (req, res) => {
  res.status(200).json({ name: "Francisco" });
});

app.listen(3000);
