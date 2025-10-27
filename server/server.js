import express from "express";
import dotenv from "dotenv";
import pkg from "./connect.cjs";
import fetchCommentsRoute from "./routes/fetchComments.js"
import fetchAccountsRoute from "./routes/fetchAccount.js"

const { connectMongo } = pkg;

dotenv.config();
const app = express();
const port = 3000;

connectMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api", fetchAccountsRoute);
app.use("/api", fetchCommentsRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})