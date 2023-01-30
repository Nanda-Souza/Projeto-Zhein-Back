import { cartCollection } from "../config/Database.js";
import  db  from "../config/Database.js";
import { ObjectId } from "mongodb";

export async function postCarrinho(req, res) {
  const { nome, preco, url } = req.body;
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(422).send("Informe o token!");

  try {
    const checaUsuarioOnline = await db
    .collection("sessoes")
    .findOne({ token })

  if (!checaUsuarioOnline)
    return res
      .status(401)
      .send("Você não tem autorização para acessar adicionar um item ao carrinho");

    await cartCollection.insertOne({ nome, preco, url, idUsuario: checaUsuarioOnline.idUsuario});
    

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getCarrinho(req, res) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(422).send("Informe o token!");

  try {
    const checaUsuarioOnline = await db
      .collection("sessoes")
      .findOne({ token })


    if (!checaUsuarioOnline)
      return res
        .status(401)
        .send("Você não tem autorização para acessar o carrinho");

    const listaCarrinho = await cartCollection
      .find({ idUsuario: checaUsuarioOnline.idUsuario })
      .toArray();

    console.log(listaCarrinho);

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
