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