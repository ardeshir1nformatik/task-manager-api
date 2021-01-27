const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})





// const task_one = new Task({
//     description: '   clean bath',
// })

// task_one.save().then((task_one) => {
//     console.log(task_one)
// }).catch((error) => {
//     console.log(error)
// })