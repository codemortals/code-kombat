import { Document } from 'mongoose';

export interface Blog extends Document {
    title: string;
    created: Date;
}
