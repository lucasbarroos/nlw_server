import { Request, Response } from 'express';
import knex from '../database/connection';


class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map((element) => {
            return {
                title: element.title,
                image_url: `http://localhost:3333/image/${element.image}`,
            }
        });

        return response.json(serializedItems);
    }
}

export default ItemsController;