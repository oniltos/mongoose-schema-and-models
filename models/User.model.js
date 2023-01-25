import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: String,
    username: {
      type: String,
      trim: true,
    },
    avatarUrl: {
      type: String,
      default: "images/default-avatar.jpg",
    },
    carPlate: {
      type: String,
      validate: {
        validator: (value) => validator.isLicensePlate(value, "pt-BR"),
        message: "Este campo precisa receber uma placa válida",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
