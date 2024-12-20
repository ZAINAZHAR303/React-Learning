const express = require('express');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();
const port = 7000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://zain:n8fvmhudsxtHKhVC@cluster0.r1g32.mongodb.net/ToDoApp?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.error(error)
    }
}
connectDb();


const TodoSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todos = mongoose.model("ToDo's", TodoSchema);

app.get('/', (req,res)=>{
    res.send("Hello World")
})


app.post('/todos/create', async (req, res)=>{
    try{
        let newTodo = new Todos({
            id: req.body.id,
            title: req.body.title,
            description: req.body.description
        })
        let result = await newTodo.save();
        res.json({
            data:result,
            status: "success"
        })
    } catch(err){
        res.status(501).json({
            data: [],
            status: "error",
            message: err
        })
    }
})

app.get('/todos/display', async (req, res) => {
    try{
        // const id = req.params?.id;
        let todo = await Todos.find()
        res.json({
            data: todo,
            status: "success"
        })
    } catch(err){
        res.status(501).json({
            data: [],
            status: "error",
            message: err
        })
    }
})

app.delete('/todos/delete/:id', async (req,res)=>{
    try{
        let id = req.params?.id;
        let todo = await Todos.findOneAndDelete({id:id});
        res.json({
            data: todo,
            status: "success"
        })
    } catch(error){
        res.json({
            data: [],
            status: "error",
            error: error,
        })
    }
})

app.put('/todos/update/:id', async (req, res) => {
    try {
        let id = req.params?.id;
        let updatedData = await Todos.findOneAndUpdate({id:id}, req.body, {new: true})
        res.json({
            data: updatedData,
            status: "success"
            })

} catch (error) {
    res.json({
        data: [],
        status: "error",
        error: error
        })
        
    }
})

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    address: String,

});

const User = mongoose.model("User", userSchema);

app.post('/auth/signup', async (req, res) => {
    try{
        console.log("req.body received", req.body);
        if(!req.body?.password){
            res.json({
                data: [],
                status: "error",
                error: "password is requires"
            })
        }
        var hash = bcrypt.hashSync(req.body.password,8);
        console.log("hash", hash);
        let newUser = new User({
            name: req.body?.name,
            email: req.body?.email,
            password: hash,
            address: req.body?.address
        })
        let output = await newUser.save();
        res.json({
            data: output,
            status: "success"
        })
    } catch(error){
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
})



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})