const express = require('express')


const app = express()


app.get('/',(req,res)=>{
    res.send('this is node chetan patil applucation')
})


app.listen(4000,'0.0.0.0',()=>{
    console.log('port running in 4000')
})