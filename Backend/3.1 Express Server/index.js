import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hey there!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>I am Bharadwaj</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact!</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})
