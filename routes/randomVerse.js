import axios from 'axios';
import { Router } from "express";

const randomVerseRoute = Router();

randomVerseRoute.get('/', async (req, res)=> {
    let response = await axios.get(`https://www.abibliadigital.com.br/api/verses/:version/random`)
    res.send(response)
})

export { randomVerseRoute }