import { db } from "../config/Database.js";
import bcrypt from "bcrypt"

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
