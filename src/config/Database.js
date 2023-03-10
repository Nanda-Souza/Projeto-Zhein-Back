
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI)
let db;

try{
  await mongoClient.connect()
  db = mongoClient.db()
  console.log("Database connected successfully!") 
} catch (error) {
  console.log("Database connection error!")
}

export default db
export const cartCollection = db.collection("cart");
export const produtoCollection = db.collection("produtos");
export const sessoesCollection = db.collection("sessoes");