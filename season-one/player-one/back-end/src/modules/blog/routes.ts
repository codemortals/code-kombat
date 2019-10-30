import * as parser from 'body-parser';
import { Application, Router } from 'express';

import BlogController from './controller';

module.exports = (app: Application) => {
    const router: Router = Router();
    router.use(parser.json({ type: 'application/json' }));

    router.post('/', BlogController.create.bind(BlogController), BlogController.findOne.bind(BlogController));
    router.get('/', BlogController.findAll.bind(BlogController));
    router.get('/:blogId', BlogController.findOne.bind(BlogController));

    app.use('/blog', router);
};
