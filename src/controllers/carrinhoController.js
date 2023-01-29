import { cartCollection } from "../config/Database.js";
import { ObjectId } from "mongodb";

export async function postCarrinho(req, res){
    const {url, nome, preco} = req.body;

    try{
        await cartCollection.insertOne({url, nome, preco});
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
};

export async function getCarrinho(req, res){
    try{
        const listaCarrinho = await cartCollection.find().toArray();
        res.send(listaCarrinho);
    }catch(err){
        res.status(500).send(err);
    }
};

export async function deletaCarrinho(req, res){
    const {id} = req.params;
    try{
        await cartCollection.deleteOne({_id: ObjectId(id)});
        res.status(200).send({message: "Produto apagado com sucesso"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}