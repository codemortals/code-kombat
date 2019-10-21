import * as cors from 'cors';
import * as express from 'express';
import * as glob from 'glob';
import * as helmet from 'helmet';

import { CorsOptions } from 'cors';

import Database from './utils/database';

const app = express();

/* Configure the Express App */
app.set('port', 3000);
app.set('trust proxy', true);

/* Setup CORS security */
const corsOpts: CorsOptions = {
    origin: true,
    methods: [ 'GET', 'POST', 'PATCH', 'DELETE', 'HEAD' ],
    allowedHeaders: [ 'Authorization', 'Content-Type' ],
    credentials: true,
    optionsSuccessStatus: 200,
};
app.options('*', cors(corsOpts));
app.use(cors(corsOpts));

/* Common API security features */
app.use(helmet({
    frameguard: { action: 'sameorigin' },
}));

app.use(Database);

/* Load in the modules to run */
const routes = glob.sync(`${__dirname}/modules/**/routes.+(ts|js)`);
routes.forEach((route) => {
    require(route)(app);
});

/* Start Express server. */
app.listen(app.get('port'), () => {
    console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
    console.log('Press CTRL-C to stop\n');
});

module.exports = app;
