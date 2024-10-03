import { MongoClient } from "mongodb";
import { isDevelopment } from "@/utils/isDevelopment";

const uri = isDevelopment()
  ? process.env.MONGODB_URI_DEV
  : process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local or .env.production");
}

const options = {
  useUnifiedTopology: true,
};

let client;
let clientPromise;

const connectWithRetry = async () => {
  try {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log('MongoDB connected successfully');
    return client;
  } catch (error) {
    console.error('MongoDB connection failed after multiple attempts:', error);
    throw error;
  }
};

if (isDevelopment()) {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = connectWithRetry();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = connectWithRetry();
}

export default clientPromise;