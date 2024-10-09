import { Schema, model } from "mongoose";
import Cliente from "./cliente_model.js";
const veiculoSchema = new Schema({
  placa: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
  },
});

const Veiculo = model("Veiculo", veiculoSchema);

export default Veiculo;
