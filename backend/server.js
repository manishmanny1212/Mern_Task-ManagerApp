const express=require("express");
const app= express()
app.get("/",(req,response)=>{
    response.send("welcome to home page ")
})
app.get("/about",(req,response)=>{
    response.send("welcome to About page ")
})
const PORT= process.env.PORT ||"5000";

app.listen("5000", ()=>{
    console.log(`your server is stared in ${PORT} `)
})


// mongodb+srv://manish1212:<password>@manishcluster.sapuazz.mongodb.net/?retryWrites=true&w=majority
