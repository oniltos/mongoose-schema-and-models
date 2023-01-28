import mongoose from "mongoose";
import User from "./models/User.model.js";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) =>
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`)
  )
  .catch((error) => console.log("Erro ao conectar ao mongo", err));

User.findById('63d0821d0d06729571167d65')
    .then(result => {
        result.avatarUrl = 'images/novo-avatar-do-felipe.jpg'
        return result.save()
    })
    .catch(error => console.log(error))