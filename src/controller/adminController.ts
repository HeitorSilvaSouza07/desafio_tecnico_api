import type { Request, Response } from 'express';

export class AdminController{

    static async teste(req: Request, res: Response){
        return res.status(200).json({'msg': 'Banco trabalhando'});
    }

}