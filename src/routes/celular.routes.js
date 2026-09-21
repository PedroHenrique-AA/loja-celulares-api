import { serviceCelular } from '../services/celular.service.js';
import { Router } from 'express';

export const celularRouter = Router();

celularRouter.get("/", async (req, res)=> {
    try{
    const celular = await serviceCelular.getAll();
    return res.status(200).json(celular);
    }catch(error){
        console.error(error);
    }
});
celularRouter.post("/", async (req, res)=> {
    try{
    const celular = await serviceCelular.create({
      marca: 'Nokia',
      modelo: 'Nokia 7 Pro',
      preco: 599.59,
      quantidade_estoque: 23
    });
    return res.status(201).json(celular)
    }catch(error){
        console.error(error);
    }
});