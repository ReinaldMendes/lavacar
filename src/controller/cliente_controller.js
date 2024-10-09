import cliente from "../model/cliente_model.js";

export const store = async (req, resp) => {
  try {
    cliente.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = cliente.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content = cliente.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (res, resp) => {
  try {
    cliente.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    cliente.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
