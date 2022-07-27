import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let user: string = 'Joao'
    res.render('home', {
        user: user
    })})

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulario ce Contato')
})

router.get('/sobre', (req: Request, res: Response) => {
    res.send('About Us')
})

export default router
