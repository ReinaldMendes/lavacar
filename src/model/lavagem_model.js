import { Schema, model } from "mongoose";
import Veiculo from "./veiculo_model.js";
const lavagemSchema = new Schema({
  marca: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  veiculo: {
    type: Schema.Types.ObjectId,
    ref: "Veiculo",
  },
});

const Lavagem = model("Lavagem", lavagemSchema);

export default Lavagem;
