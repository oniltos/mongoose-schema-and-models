import mongoose from "mongoose";
import Cat from "./models/Cat.model.js";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) =>
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`)
  )
  .catch((error) => console.log("Erro ao conectar ao mongo", err));

const novoGato = new Cat({
  name: "Yoshi 2",
  color: "green",
  age: 3,
  country: "us",
});

novoGato
  .save()
  .then((catFromDB) => console.log(catFromDB))
  .catch((error) => console.log(error));
