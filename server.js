import express from 'express';
import 'dotenv/config';
import axios from 'axios';
import { engine } from 'express-handlebars';
import { randomVerseRoute } from './routes/randomVerse.js';

const port = 3001;
const server = express();

// Configuração do Handlebars
server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
// Configuração para servir arquivos estáticos
server.use(express.static('public'));

server.get('/', async (req, res) => {
    res.render('home')
})
server.use(`/randomVerse`,randomVerseRoute);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
