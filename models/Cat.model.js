import mongoose from "mongoose";

const countryUpperCase = (countryName) => {
  return countryName.toUpperCase();
};

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enum: ["white", "black", "frajolado", "rajado", "green"],
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 50,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  country: {
    type: String,
    match: /^[A-Z]{2}$/,
    set: countryUpperCase,
  },
});

export default mongoose.model("Cat", catSchema);
