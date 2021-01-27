const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    }) 
}

const doWork = async () => {
    const sum1 = await add(2, 4)
    console.log(sum1)
    const sum2 = await add(sum1, 10)
    console.log(sum2)
    const sum3 = await add(sum2, 10)
    console.log(sum3)
    console.log('hey')
    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log('Error: ', e)
})
console.log('ahaaaaaaaa')