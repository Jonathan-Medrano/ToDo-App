import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js"

export const verifyToken = (req, res, next) => {

  const authHeader = req.headers.authorization

  // Verificar si existe el header Authorization
  if (!authHeader) {
    return res.status(401).send({
      token: false,
      message: "Sesion requerida."
    })
  }

  // Extraer token del formato: Bearer TOKEN
  const token = authHeader.split(" ")[1]

  try {

    const payload = jwt.verify(token, JWT_SECRET)

    // Guardar id del usuario en el request
    req.userId = payload.id

    next()

  } catch {
    return res.status(401).send({
      token: false,
      message: "Sesion inválida."
    })
  }
}
