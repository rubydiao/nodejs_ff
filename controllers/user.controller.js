const fetch = require('node-fetch')
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
let array = []
const Login = (req, res) => {
    // const {username,pass} = req.query
    // const {username,pass} = req.params
    const { username, password } = req.body
    console.log('username :', username, 'password :', password)
    res.json({
        username,
        password,
    })
}
/**
 *
 *
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
const Graph = (req, res) => {
    const { x, y } = req.body
    x.forEach((r, index) => {
        x[index] = x[index] + 10
    })
    y.forEach((r, index) => {
        y[index] = y[index] + 10
    })
    res.json({
        x,
        y,
    })
}
const Users = async (req, res) => {
    // const {username,pass} = req.query
    // const {username,pass} = req.params
    // const {msg} = req.body
    // const data = await fetch('https://jsonplaceholder.typicode.com/users')
    // const json = await data.json()
    // const { id } = req.params
    // const val = json.filter((user) => user.company.name == id)
    res.json({
        data: array,
    })
}
const Register = (req, res) => {
    const { name } = req.body
    array.push({ name })
    res.json({
        name,
    })
}
const Search = (req, res) => {
    const { nameinput } = req.params
    const val = array.filter((r) => r.name == nameinput)
    res.json({
        data: val,
    })
}

module.exports = {
    Login,
    Users,
    Register,
    Search,
    Graph,
}
