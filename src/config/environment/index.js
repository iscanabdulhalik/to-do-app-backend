import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const env = {
    development: process.env.NODE_ENV === 'development'
}

    const uri = process.env.MONGODB_URI;

    export { port, env, uri };