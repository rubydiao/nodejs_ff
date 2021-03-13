const fetch = require("node-fetch");
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const Login = (req,res) =>{
    // const {username,pass} = req.query
    // const {username,pass} = req.params
    const {username,pass} = req.body
    res.json({
        username,
        pass
    })
}
const Users = async (req,res) =>{
    // const {username,pass} = req.query
    // const {username,pass} = req.params
    // const {msg} = req.body
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await data.json();
    const {id} = req.params
    const val  = json.filter((user) => user.company.name == id)
    res.json({
        data: val
    })
}
module.exports = {
    Login , Users
}
    