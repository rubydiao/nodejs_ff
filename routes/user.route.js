const express = require('express')
const {
    Login,
    Users,
    Register,
    Search,
} = require('../controllers/user.controller.js')
const user_route = express.Router()

user_route.post('/login', (req, res) => Login(req, res))
// user_route.get('/:id', (req, res) => Users(req, res))
user_route.post('/register', (req, res) => Register(req, res))
user_route.get('/search/:nameinput', (req, res) => Search(req, res))
user_route.get('/', (req, res) => Users(req, res))

// user_route.put("/",(req,res)=>{
//     res.json({
//         message: "Users PUT"
//     })
// })
// user_route.delete("/",(req,res)=>{
//     res.json({
//         message: "Users DELETE"
//     })
// })

module.exports = user_route
