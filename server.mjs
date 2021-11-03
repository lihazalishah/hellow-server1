
//console.log("server start")
import express from "express";

const port = process.env.PORT || 3000;
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

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)

})
// deploy this server to heroku cloud
// read: https://devcenter.heroku.com/articles/getting-started-with-nodejs
