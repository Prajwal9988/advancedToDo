import express from 'express';

const app = express();

app.get("/",(req,res) => {
    res.send("Connected");
})

app.listen(4000, () => {
    console.log("Listeneing on port 4000...");
})