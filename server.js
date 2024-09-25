import app from "./app.js";
import mongoose from "mongoose";
// import "dotenv/config";
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("DB connect");
    app.listen(3001);
  })
  .catch((error) => {
    console.log(error.message);
    process.exist(1);
  });

// console.log(DB_HOST);
// console.log("hel");

// app.listen(3001, () => console.log("Server run"));
// Du9GCjt4W6Cq9wkL

// YECVXpfe1ORBmB3Q          Ivan
