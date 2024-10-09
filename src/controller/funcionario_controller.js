import funcionario from "../model/funcionario_model.js";

export const store = async (req, resp) => {
  try {
    funcionario.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = funcionario.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content = funcionario.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (res, resp) => {
  try {
    funcionario.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    funcionario.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
