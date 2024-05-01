import {port, uri, env} from './src/config/environment/index.js';
import mongoose from 'mongoose';
import app from './src/app.js'


async function connectToDB() {
  try {
    await mongoose.connect(uri);
    console.log("🥂 Connected to DB");
  } catch (error) {
    console.log(`❌ Server is not running: ${error} `);
  }
}

const start = async () => {
    try {
        await connectToDB();
        await app.listen(port);
        if (env.development) {
            console.log(`🎆 Server is running on http://localhost:${port}`);
        }
        // else if (env.production) {
        //     console.log(`🎆 Server is running on port ${port}`);
        // }
    } catch (error) {
        console.log(`❌ Server is not running: ${error} `);
    } 
}

start();
