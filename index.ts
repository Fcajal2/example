const app = require("express")();

app.get("/hola", (req, res) => {
  res.json({ name: "Francisco" }).status(200);
});

app.listen(3000);