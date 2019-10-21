import { Request, Response, NextFunction } from 'express';
import { BlogModel } from '../../schemas/blog.schema';

class BlogController {

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const blog = new BlogModel({
            title: req.body.title,
        });

        try {
            await blog.save();
            res.status(201);
            res.send();
        } catch(error) {
            console.log(error);
            res.status(400);
            res.send();
        }
    }

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const blogs = await BlogModel.find();
            res.send({ list: blogs });
        } catch(error) {
            res.status(404);
            res.send();
        }
    }

}

export default new BlogController();
