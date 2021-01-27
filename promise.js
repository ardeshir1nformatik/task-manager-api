require('./src/db/mongoose')
const Task = require('./src/models/task')
const User = require('./src/models/user')

// Task.findByIdAndDelete('60097e1b88de94815a453e55').then((task) => {
//     if (!task) {
//         console.log('Task not found.')
//     } else {
//     console.log(task)
//     }
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('60097f315abadb816be16b82').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }
//  updateAgeAndCount('60095cf96916347fd04e6cd7', 36).then((count) => {
//      console.log(count)
//  }).catch((e) => {
//      console.log(e)
//  })


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 2000)
//     }) 
// }
// add(2, 3).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// add(2, 3).then((sum) => {
//     console.log(sum)
//     return add(sum, 15)
// }).then((sum2) => {
//     console.log(sum2)
// }).catch((e) => {
//     console.log(e)
// })