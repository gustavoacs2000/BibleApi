import express from 'express';
import axios from 'axios';
import { randomVerseRoute } from './routes/randomVerse.js'

const port = 3001;
const server = express();

server.get('/', async (req, res) => {
    let apiBible = await axios.get(`https://www.abibliadigital.com.br/api/books`);
    res.send(apiBible.data);
    console.log(apiBible);
})
server.use(`/randomVerse`,randomVerseRoute);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
