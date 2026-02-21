import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server started")

})
//crrating one api
app.get("/",(req,res)=>{
    res.send("Hello World")
})
//creating second api
app.get("/home",(req,res)=>{
    res.send("This is home api")
})
//creating 3 api
app.get("/users",(req,res)=>{
    res.send("This is users list")
})

