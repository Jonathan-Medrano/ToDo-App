import { pool } from "../db.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js"

export const registerUser = async (req, res) => {
  if (req.body.email && req.body.password && req.body.username) {
    const password_hash = await bcrypt.hash(req.body.password, 10)
    const [response] = await pool.query("INSERT INTO users(email, password_hash, name) VALUES(?, ?, ?)", [req.body.email, password_hash, req.body.username])

    if (response.affectedRows === 0) {
      res.status(400).send({ result: false, message: "No se pudo registrar el usuario." })
    } else {
      res.status(200).send({ result: true, message: "Usuario registrado correctamente." })
    }

  } else {
    if (!req.body.email) {
      res.status(400).send({ result: false, message: "El email es requerido." })
    } else if (!req.body.password) {
      res.status(400).send({ result: false, message: "La contraseña es requerida." })
    } else if (!req.body.username) {
      res.status(400).send({ result: false, message: "El nombre es requerido." })
    }
  }
}

export const loginUser = async (req, res) => {

  if (!req.body.username || !req.body.password) {
    return res.status(400).send({
      result: false,
      message: "Usuario y contraseña requeridos."
    })
  }

  const [result] = await pool.query(
    "SELECT id, email, password_hash, name FROM users WHERE name = ?",
    [req.body.username]
  )

  if (result.length === 0) {
    return res.status(401).send({
      result: false,
      message: "Usuario no encontrado."
    })
  }

  const user = result[0]

  const validPassword = await bcrypt.compare(
    req.body.password,
    user.password_hash
  )

  if (!validPassword) {
    return res.status(401).send({
      result: false,
      message: "Contraseña incorrecta."
    })
  }

  const token = jwt.sign(
    { id: user.id },
    JWT_SECRET,
    { expiresIn: "2h" }
  )

  res.status(200).send({
    result: true,
    message: "Sesion iniciada.",
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  })
}

