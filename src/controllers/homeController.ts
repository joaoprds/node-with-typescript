import {Request, Response} from 'express'
import { Op } from 'sequelize';
import {User} from '../models/User'


export const home = async (req: Request, res: Response) => {
    let users = await User.findAll({
        //attributes: ['name', 'age'], //só pega os dados que eu quiser 
        //where: {name: 'Edvandro'}, // comando WHERE com o operador AND
        where: {
            [Op.or]: [
                {age: 26},
                {name: 'Mario'}
            ]
        }
    });
    
    
    
    let user: string = 'Joao'
    res.render('pages/home', {
        user: user,
        showWelcome: true,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 25},
            {title: 'Produto A', price: 50}
        ],
        users
    })}