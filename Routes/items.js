//this file will store all the routes 

import { Router } from 'express'
const router = Router()


// define the home page route
router.get('/', (req,res)=> {
    res.send('Got a GET Request')
})

router.post('/items',(req,res)=>{
    res.send('Got a POST Request')
    // res.json({x:1, y:2, z:3})
})

router.put('/items/:id',(req,res)=>{
    res.send('Got a PUT Request')
})

router.delete('/items/:id',(req,res)=>{
    res.send('Got a DELETE Request')
})

export default router

