import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    await authService.register(email, password);
    res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
