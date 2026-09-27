import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("MONGODB_URI is not defined");
}

const options = {
    serverSelectionTimeoutMS: 10000,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }

    clientPromise = global._mongoClientPromise;
} else {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }

    clientPromise = global._mongoClientPromise;
}

export default clientPromise;
