import { Document } from 'mongoose';

export interface Blog extends Document {
    title: string;
    image: string;
    created: Date;
}
