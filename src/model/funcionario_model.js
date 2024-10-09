import { Schema, model } from "mongoose";
const funcionarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
});

const Funcionario = model("Funcionario", funcionarioSchema);

export default Funcionario;
