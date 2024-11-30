import * as todoRepo from "../repositories/todo.repository.js";

export const getAll = async () => await todoRepo.getAll();

export const getById = async (id) => await todoRepo.getById(id);

export const create = async (userId, data) => {
  const todo = { ...data, userId, createdAt: new Date() };
  return await todoRepo.create(todo);
};

export const update = async (id, data) => await todoRepo.update(id, data);

export const remove = async (id) => await todoRepo.remove(id);
