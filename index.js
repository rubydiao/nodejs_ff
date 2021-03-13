const express = require('express');
const user_route = require('./routes/user.route');
const bodyParser = require('body-parser');
const app = express();
const PORT= 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend : true}))
app.use("/api/v1/users", user_route );

// app.get("/",(_req,res)=>{
//     res.json({
//         message: "Hello world"
//     })
// })

app.listen(PORT,()=>{
    console.log(`server Started at port ${PORT}`)
})