import express from "express";
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config();

const server = express()

server.use(cors())

server.use(express.json());


//

//server.listen(PORT, () => console.log(`Server is up on port ${PORT}!!!`))

server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});