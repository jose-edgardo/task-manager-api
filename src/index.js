const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto: ' + port)
})





// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async() => {
//     // const task = await Task.findById('5f82760653cb58350c543e2a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f824b5c1420402144cda239')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

// const pet = {
//     name: 'hal'
// }

// pet.toJSON = function() {
//     return {}
// }

// console.log(JSON.stringify(pet))



// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const bcrypt = require('bcryptjs')
// const myFuntion = async() => {
//     const password = 'Red12345!'
//     const haashPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(haashPassword)

//     const isMatch = await bcrypt.compare('Red12345!', haashPassword)
//     console.log(isMatch)
// }