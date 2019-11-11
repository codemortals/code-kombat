import { Request, Response, NextFunction } from 'express';
import { BlogModel } from '../../schemas/blog.schema';

class BlogController {

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const blog = new BlogModel({
            title: req.body.title,
            image: req.body.image,
            content: req.body.content,
        });

        try {
            await blog.save();
            res.status(200);
            req.params.blogId = blog._id;
            next();
        } catch(error) {
            console.log(error);
            res.status(400);
            res.send();
        }
    }

    public async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const blogId = req.params.blogId;
            const blog = await BlogModel.findById(blogId);
            res.send(blog);
        } catch(error) {
            res.status(404);
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
