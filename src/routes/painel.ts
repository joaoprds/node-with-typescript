import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Ola Dev')
})

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulario ce Contato')
})

router.get('/sobre', (req: Request, res: Response) => {
    res.send('About nois')
})

export default router
