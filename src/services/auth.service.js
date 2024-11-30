import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findByEmail } from "../repositories/user.repository.js";

export const register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(email, hashedPassword);
};

export const login = async (email, password) => {
  const user = await findByEmail(email);
  if (!user) throw new Error("Usuário não encontrado");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Senha inválida");
  console.log(process.env.JWT_SECRET);
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

  return token;
};
