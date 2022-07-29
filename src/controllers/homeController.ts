import {Request, Response} from 'express'

export const home = (req: Request, res: Response) => {
    let user: string = 'Joao'
    res.render('pages/home', {
        user: user,
        showWelcome: true,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 25},
            {title: 'Produto A', price: 50}
        ]
    })}