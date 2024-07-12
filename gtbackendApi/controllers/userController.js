import { db } from "../db.js";

export const addUser = (req, res) => {
  if (!req.body.nome || !req.body.telefone || !req.body.email || !req.body.senha) {
    return res.status(400).json({ message: "Todos os campos (nome, telefone, email, senha) são obrigatórios." });
  }

  if (isNaN(req.body.telefone)) {
    return res.status(400).json({ message: "Telefone deve ser um número válido." });
  }

  if (!isValidEmail(req.body.email)) {
    return res.status(400).json({ message: "Email deve ter um formato válido." });
  }

  const newUser = "INSERT INTO usuarios(`nome`,`telefone`, `email`, `senha`) VALUES(?)";
  const values = [req.body.nome, req.body.telefone, req.body.email, req.body.senha];

  db.query(newUser, [values], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: "Email já cadastrado." });
      }
      return res.status(500).json(err); // Erro interno do servidor
    }

    return res.status(200).json("Usuário cadastrado com sucesso.");
  });
};

// Função que valida formato do email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

