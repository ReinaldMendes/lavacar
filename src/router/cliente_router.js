import { Router } from "express";
import {
  store,
  index,
  update,
  destroy,
} from "../controller/cliente_controller.js";
const router = Router();
router.get("/cliente", index);
router.get("/:id", index);
router.post("/cliente", store);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
