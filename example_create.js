import mongoose from "mongoose";
import User from "./models/User.model.js";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) =>
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`)
  )
  .catch((error) => console.log("Erro ao conectar ao mongo", err));

const newUser = {
  name: "João 5",
  email: "joão5@gmail.com",
  username: "joao5",
  carPlate: "ABC-2I25",
};

// User.create(newUser)
//   .then((userCreated) => {
//     console.log("Novo usuário criado", userCreated);
//   })
//   .catch((error) => console.log(error));

const createUser = async newUser => {
  try {
    const createdUser = await User.create(newUser)
    console.log('Novo usuário criado: ', createdUser)
    return createdUser
  } catch (error) {
    console.log(error)
  }
}

createUser(newUser)
