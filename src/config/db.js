import pg from 'pg';
import 'dotenv/config.js';
const { Pool } = pg;
export const pool = new Pool

pool.on('error', (err) => {
  console.error('Erro inesperado no cliente do banco de dados', err);
  process.exit(-1);
});
