import mongoose from "mongoose";
import User from "./models/User.model.js";

mongoose
  .connect("mongodb://localhost/gatopedia-dev")
  .then((db) =>
    console.log(`Conectado ao mongo! Database: ${db.connections[0].name}`)
  )
  .catch((error) => console.log("Erro ao conectar ao mongo", err));




// User.findByIdAndUpdate('63d0821d0d06729571167d65', {avatarUrl: 'images/avatar-do-felipe.jpg'}, { new: true })
//     .then(updatedUser => {
//         console.log('updatedUser', updatedUser)
//     })
//     .catch(error => console.log(error))

// User.updateOne({username: 'joao3'}, {username: 'johnny3'}, { new: true })
//     .then(updatedUser => {
//         console.log('updatedUser', updatedUser)
//     })
//     .catch(error => console.log(error))

User.updateMany({carPlate: 'ABC-2I25'}, {carPlate: 'ABA-2I26'}, { new: true })
    .then(result => {
        console.log('updatedUser', result)
    })
    .catch(error => console.log(error))