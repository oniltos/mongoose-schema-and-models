import mongoose from "mongoose";
import User from "./models/User.model.js";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) =>
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`)
  )
  .catch((error) => console.log("Erro ao conectar ao mongo", err));

const newUser = {
  name: "João 3",
  email: "joão3@gmail.com",
  username: "joao3",
  carPlate: "ABC-2I25",
};

User.create(newUser)
  .then((userCreated) => {
    console.log("Novo usuário criado", userCreated);
  })
  .catch((error) => console.log(error));
