import { produtoCollection } from "../config/Database.js";
import { ObjectId } from "mongodb";

export async function addProduto(req, res) {
    
    const { nome, imagem, descricao, preco } = req.body
  
    try {
       
      await produtoCollection.insertOne({ 
        nome,
        imagem,
        descricao,
        preco        
    })
  
      res.status(201).send("Produto Adicionado!")
  
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  export async function getProdutos(req, res) {
          

  try {   
    
    const listaProdutos = await produtoCollection.find({ }).toArray() 
    
    return res.status(200).send(listaProdutos)

  } catch (error) {
    res.status(500).send(error)
  }
}

export async function getIdProduto(req, res){
  const id = req.params.id;
  const achei = await produtoCollection.findOne({_id: ObjectId(id)});
  if(!achei)return res.sendStatus(404);
  try{

    res.send(achei);
  }catch(err){
    res.status(500).send(err);
  }
}