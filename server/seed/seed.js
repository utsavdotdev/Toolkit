import axios from "axios";
import { createToolTableSQL, dropToolSQL } from "./sql.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const Operation = async () => {
  try {
    await connection.query(dropToolSQL);
    console.log("Table deleted😂");

    await connection.query(createToolTableSQL);
    console.log("Table Created😂");
  } catch (err) {
    console.error(err);
  }
};

await Operation();
process.exit(0);
