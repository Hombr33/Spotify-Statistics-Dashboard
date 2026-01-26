import express from "express";
import dotenv from "dotenv";
import pkg from "./connect.cjs";
import cors from "cors";

import fetchTopArtistsRoute from "./routes/fetchTopArtists.js"
import fetchAccountsRoute from "./routes/fetchAccount.js"
import loginRoute from "./auth/login.js"
import signupRoute from "./auth/signup.js"

const { connectMongo } = pkg;

dotenv.config();
const app = express();
const port = 3000;

connectMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors({
  origin: "https://reddit-statistics-app.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/api", fetchAccountsRoute);
app.use("/api", fetchTopArtistsRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})