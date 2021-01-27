const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 


//
// Without middleware: new request --> run rout handler
// 
// With middleware:    new request --> do something --> run rout handler
//

// bringing express middlewere into the mix

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(500).send('The server is unavailabe due to maintenance')
// })

// parse incoming json to an object
app.use(express.json())

// register routers
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`express is running on port ${port}`)
})


// const jwt = require('jsonwebtoken')

// const myF = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myF()

