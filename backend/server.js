const express=require("express");
const app= express()
const PORT= process.env.PORT ||"5000";

app.listen("5000", ()=>{
    console.log(`your server is stared in ${PORT} `)
})
