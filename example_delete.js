import mongoose from "mongoose";
import User from "./models/User.model.js";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) =>
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`)
  )
  .catch((error) => console.log("Erro ao conectar ao mongo", err));




User.findByIdAndRemove('63d515507122ab89c4bc58aa')
    .then(result => {
        console.log('result', result)
    })
    .catch(error => console.log(error))

User.deleteOne({username: 'joao4'})
    .then(result => {
        console.log('result', result)
    })
    .catch(error => console.log(error))

User.deleteMany({avatarUrl: 'images/default-avatar.jpg'})
    .then(result => {
        console.log('result', result)
    })
    .catch(error => console.log(error))