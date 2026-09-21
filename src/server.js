import express from 'express';
import { celularRouter } from './routes/celular.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/celular", celularRouter);

app.listen(port, () => {
  console.log(`API rodando em: http://localhost:${port}`);
});