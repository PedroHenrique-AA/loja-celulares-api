import { pool } from '../config/db.js';

class ServiceCelular {
  async getAll() {
    const res = await pool.query("SELECT * FROM celulares");
    return res.rows;    
  }
  async create(marca, modelo, preco, quantidade_estoque) {
    const res = await pool.query("INSERT INTO celulares (marca, modelo, preco, quantidade_estoque) VALUES ($1, $2, $3, $4) RETURNING *", [marca, modelo, preco, quantidade_estoque]);
    return res.rows[0];    
  }
}

export const serviceCelular = new ServiceCelular();