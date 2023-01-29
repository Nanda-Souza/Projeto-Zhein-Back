import db from "../config/Database.js";

export const pagamento = async (req, res) => {
  const { nome, cartao } = req.body;
  try {
    
    await db.collection("pedidosFechados").insertOne({ nome, cartao });

    res.status(201).send("Pagamento cadastrado");
  } catch (error) {
    res.status(500).send("Erro no servidor");
  }
};
