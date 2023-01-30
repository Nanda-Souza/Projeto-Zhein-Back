import { cartCollection } from "../config/Database.js";
import { ObjectId } from "mongodb";

export async function postCarrinho(req, res) {
  const { nome, preco, id, url } = req.body;
  console.log(nome, preco, id, url);

  try {
    await cartCollection.insertOne({ nome, preco, id, url });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getCarrinho(req, res) {
  try {
    const listaCarrinho = await cartCollection.find().toArray();
    console.log(listaCarrinho)

    if (!listaCarrinho) return res.sendStatus(401);

    res.send(listaCarrinho);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function deletaCarrinho(req, res) {
  const { id } = req.params;
  try {
    await cartCollection.deleteOne({ _id: ObjectId(id) });
    res.status(200).send({ message: "Produto apagado com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
