import { model, Model, Schema } from 'mongoose';

import { Blog } from './models';

const BlogSchema = new Schema<Blog>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
}, { });

export const BlogModel: Model<Blog> = <Model<Blog>> model('Blogs', BlogSchema, 'Blogs');
