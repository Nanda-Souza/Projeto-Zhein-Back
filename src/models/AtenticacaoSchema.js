import joi from 'joi'

export const userSchema = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  senha: joi.string().required(),
  confirmeSenha: joi.string().valid(joi.ref('senha')).required()
});
