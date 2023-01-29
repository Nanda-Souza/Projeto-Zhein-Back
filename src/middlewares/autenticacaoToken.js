import { sessoesCollection } from "../config/Database.js";

export async function autenticacaoToken(req, res, next) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", '')

  if (!token) 
    return res.status(422).send("Informe token!")

  try {
    const checarSessao = await sessoesCollection.findOne({ token })

    if (!checarSessao) 
        return res.status(401).send("Unauthorized Access!")

    //res.locals.sessao = checkSession

    next()

  } catch (error) {
        res.status(500).send(error)
  }
}