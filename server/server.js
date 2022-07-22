//Importing Packages
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import colors from "colors"

//Making instances
const app = express();
dotenv.config();

//Middleware
app.use(cors());//For checking the incoming request

//Listening to the port
const PORT = process.env.PORT || 3001

app.listen(PORT,() =>{
    console.log(`The app is listening in the port ${PORT}`.white);
})