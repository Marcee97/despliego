
import { pool } from "../db.js";




export const probando = async (req, res)=> {
    const result = await pool.query('SELECT * FROM productos')

    return res.json(result.rows)
}