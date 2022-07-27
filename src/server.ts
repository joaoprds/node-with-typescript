import express, { Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express'
import MainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));
server.use(MainRoutes);


server.use((req: Request, res: Response) =>{
    res.status(404).send('Pagina Não Encontrada');
});
server.listen(5000);