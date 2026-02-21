import express from 'express'

const app = express()
// Start server
app.listen(8080)
app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello world")
})

// Routes
app.get("/morning", (req, res) => {
    res.send("Good morning")
})

app.get("/evening", (req, res) => {
    res.send("Good evening")
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("this is post request")
})