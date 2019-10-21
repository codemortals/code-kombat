import { NextFunction, Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { MongoError } from 'mongodb';

export class Database {

    public static connect(req: Request, res: Response, next: NextFunction): void {
        const mongo = {
            uri: 'mongodb://localhost/code-kombat',
            options: {
                autoIndex: true,
                bufferCommands: false,
                bufferMaxEntries: 0,
                poolSize: 5,
                reconnectTries: 30,
                socketTimeoutMS: 0,
                useCreateIndex: true,
                useNewUrlParser: true,
            },
        };

        if (!mongoose.connection.readyState) {
            mongoose
                .connect(mongo.uri, mongo.options)
                .then(() => next())
                .catch((err: MongoError) => next(err));
        } else {
            next();
        }
    }

}

export default Database.connect;
