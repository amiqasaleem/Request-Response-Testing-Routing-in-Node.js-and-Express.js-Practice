import express from "express";
const port = 5000;

const app = express();

//This is loading the router into the main file

import items from './Routes/items.js';

app.use('/api', items)

app.listen(5000,()=> { 
    console.log(`Server is working on port ${port}`);
})

