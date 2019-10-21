import * as parser from 'body-parser';
import { Application, Router } from 'express';

import BlogController from './controller';

module.exports = (app: Application) => {
    const router: Router = Router();
    router.use(parser.json({ type: 'application/json' }));

    router.post('/', BlogController.create.bind(BlogController));
    router.get('/', BlogController.findAll.bind(BlogController));

    app.use('/blog', router);
};
