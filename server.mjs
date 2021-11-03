
//console.log("server start")
import express from "express";

const port=process.env.port || 3000;
const app=express();
app.get("/profile",(req,res ) => {
    res.send("here is profile");
})

app.get("/about",(req,res ) => {
    res.send("here is about");
})

app.get("/",(req,res ) => {
    res.send("i am using hellow ward server");
})

app.listen(3000,()=>{
    console.log(`Example app listening at http://localhost:${port}`)

})
// deploy this server to heroku cloud
// read: https://devcenter.heroku.com/articles/getting-started-with-nodejs
