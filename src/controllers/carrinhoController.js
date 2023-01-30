import { cartCollection, sessoesCollection } from "../config/Database.js";
import { ObjectId } from "mongodb";


export async function postCarrinho(req, res){
    const algumaCoisa = req.body;
    console.log(algumaCoisa);

    try{
        await cartCollection.insertOne({algumaCoisa});
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
};

export async function getCarrinho(req, res) {
  const {authorization} = req.headers;

  const token = authorization?.replace("Bearer ", "");

  if(!token)return res.status(422).send("Informe o token!");

  try {
    const userExist = await sessoesCollection.findOne({token});

    if(!userExist)return res.status(401).send("Você não tem autorização para acessar o carrinho");


    const listaCarrinho = await cartCollection.find({_id: userExist.idUsuario}).toArray();

    if(!listaCarrinho)return res.sendStatus(401);

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
