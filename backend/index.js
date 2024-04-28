const express = require('express')
const app = express()
const {createTodo, updateTodo} = require('./types')
const { todo } = require('./db')
const cors = require('cors')

app.use(express.json())
app.use(cors()) // Allow request from any where
// app.use(cors({
//     origin:'http://localhost:5173'
// })) // Allow request from 5173 server only

app.post('/todo', async function(req,res){
    const createPayLoad = req.body
    console.log(req.body);
    const parsePayload = createTodo.safeParse(createPayLoad)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'Invalid input'
        })
        return
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: 'Todo created'
    })
})

app.get('/',function(req,res){
    res.json("Wooring for tehe same")
})

app.get('/todos',async function(req,res){
    const todos = await todo.find() //It will return promise if we want to get specific title 
    res.status(200).json({todos:todos})
})

app.put('/updateTodo',async function(req,res){
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'Invalid Input'
        })
        return
    }
    await todo.update({
        _id: req.body._id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(8080,function(){
    console.log("Server working on port 8080");
})