import lavagem from "../model/lavagem_model.js";

export const store = async (req, resp) => {
  try {
    lavagem.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = lavagem.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content = lavagem.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (res, resp) => {
  try {
    lavagem.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    lavagem.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
