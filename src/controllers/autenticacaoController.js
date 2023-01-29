import db from "../config/Database.js";
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from "uuid";

export const login = (async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuarioOn = await db.collection("usuarios").findOne({ email })

    if (!usuarioOn) return res.status(400).send("Usuário ou senha incorretos")

    const verificaSenha = bcrypt.compareSync(senha, usuarioOn.senha)

    if (!verificaSenha) return res.status(400).send("Usuário ou senha incorretos")

    const token = uuidV4()

    await db.collection("sessoes").insertOne({ idUsuario: usuarioOn._id, token })

    return res.status(200).send({ token })

} catch (error) {
    res.sendStatus(500)
    console.log(error)

}
})

export async function cadastro(req, res) {
  const { nome, email, senha } = req.body

  const senhaHashed = bcrypt.hashSync(senha, 10)

  try {

    const jaExiste = await db.collection('usuarios').findOne({
      $or: [
        {nome},
        {email}
      ]
    })
    
    if(jaExiste)
      return res.status(409).send("Nome ou Email já cadastrado")

    await db.collection("usuarios").insertOne({ 
      nome, 
      email, 
      senha: senhaHashed 
    })
    res.status(201).send("Usuario criado com sucesso!")

  } catch (error) {
    res.status(500).send(error.message)
  }
}

