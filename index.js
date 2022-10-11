const app = require("express")(); // al empezar un proyecto primero instanciamos express y lo ponemos en la constante app

app.get("/hola", (req, res) => {
  res.json({ name: "Francisco" }).status(200);
});

app.listen(3000);
