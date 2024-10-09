import veiculo from "../model/veiculo_model.js";

export const store = async (req, resp) => {
  try {
    veiculo.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = veiculo.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content = veiculo.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (res, resp) => {
  try {
    veiculo.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    veiculo.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
