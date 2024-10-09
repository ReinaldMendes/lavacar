import e from "express";
import "dotenv/config.js";
import "./conn.js";
import veiculo_router from "./router/veiculo_router.js";
import cliente_router from "./router/cliente_router.js";
import funcionario_router from "./router/funcionario_router.js";
import lavagem_router from "./router/lavagem_router.js";
const app = e();

app.use(e.json());
app.use("/", veiculo_router);
app.use("/", cliente_router);
app.use("/", funcionario_router);
app.use("/", lavagem_router);
app.listen(process.env.API_PORT, () => console.log("server running"));
