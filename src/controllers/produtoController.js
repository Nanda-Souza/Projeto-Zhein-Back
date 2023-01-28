import { produtoCollection } from "../config/Database.js";

export async function addProduto(req, res) {
    
    const { nome, imagem, descricao, preco } = req.body
  
    try {
       
      await produtoCollection.insertOne({ 
        nome,
        imagem,
        descricao,
        preco        
    })
  
      res.status(200).send("Produto Adicionado!")
  
    } catch (error) {
      res.status(500).send(error.message)
    }
  }