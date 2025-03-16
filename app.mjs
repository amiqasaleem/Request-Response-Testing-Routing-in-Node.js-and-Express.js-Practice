import express from "express";
const PORT = 3000;

const app = express();

app.get('/', (req,res)=> {
    res.send('Got a GET Request')
})


app.listen(3000,()=> { `Server is working on port ${PORT}`})