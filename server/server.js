//Importing Packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import mysql from "mysql2/promise";

//Making instances
const app = express();
dotenv.config();

//Database connection
const connection = await mysql.createConnection(process.env.DATABASE_URL);

//Middleware
app.use(express.json());// for using json data
app.use(cors()); //For checking the incoming request


// API's Endpoints
app.get("/", (req, res) => {
  res.json({ msg: "Success✅" });
});

//Endpoint to get all tools
app.get("/tools", async (req, res) => {
  const query = "SELECT * FROM tools";
  const [rows] = await connection.query(query);
  res.send(rows);
});

//Endpoint to post tool
app.post("/tools", async (req, res) => {
  try {
    const name = req.body.name;
    const des = req.body.des;
    const link = req.body.link;
    const image = req.body.image;
    const query = `INSERT INTO tools (name, des, link, image) VALUES (?,?,?,?)`;
    const response = await connection.query(query,[name,des,link,image]);
    if(response){
        res.status(200).send({msg:"Tool Added🔥"})
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//Listening to the port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The app is listening in the port ${PORT}`.white);
});
