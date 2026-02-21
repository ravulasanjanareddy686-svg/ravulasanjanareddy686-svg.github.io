import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("server Started")
})
//aap1
app.get("/",(req,res)=>{
    console.log(req.url);
    res.send("this is the response from the server get method")
})

//post
app.post("/",(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    res.send("this is the response from  post method the server")
});