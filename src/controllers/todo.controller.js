import * as todoService from "../services/todo.services.js";

export const getAll = async (req, res) => {
  const todos = await todoService.getAll();
  res.json(todos);
};

export const getById = async (req, res) => {
  const todo = await todoService.getById(req.params.id);
  res.json(todo);
};

export const create = async (req, res) => {
  const todo = await todoService.create(req.user.email, req.body);
  res.status(201).json(todo);
};

export const update = async (req, res) => {
  await todoService.update(req.params.id, req.body);
  res.status(204).send();
};

export const remove = async (req, res) => {
  await todoService.remove(req.params.id);
  res.status(204).send();
};
