const app=require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('server running at port ' + port)
})

// const express = require('express')
// const app = express()
// const port = process.env.PORT
// require('./db/mongoose')

// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

// middleware new req-> do something->run route handlers
// app.use((req,res,next)=>{
//     console.log(req.method,req.path)
//    // next()
//    if(req.method === 'GET') {
//     res.send('GET Reqs are disabled')
//    }else {
//        next()
//    }
// })

// app.use((req,res,next)=>{
//     // next()
//     res.status(503).send('Server Maintainence')
// })
// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         // if(!file.originalname.endsWith('.pdf')){
//             if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         } 
//         cb(undefined,true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })

// const errorMiddleware = (req,res,next) => {
//     throw new Error('from my middleware')
// }

// app.post('/upload', upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })

// app.use(express.json()) // first express json and then routes otherwise req will be null
// app.use(userRouter)
// app.use(taskRouter)

// const jwt = require('jsonwebtoken')

// const jwtFn = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisisnew', { expiresIn: '7 days' }) // signature
//     console.log('jsonwebtoken--->', token)
//     const data = jwt.verify(token, 'thisisnew')
//     console.log('verify jwt--->', data)
// }
// jwtFn()


// const brcypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'Blue777'
//     const hashedPassword = await brcypt.hash(password, 8) //Hash Algorithms
//     console.log('bcrypt--->', hashedPassword)
//     const isMatch = await brcypt.compare('Blue777', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()

// const pet = {
//     name : "Hal"
// }
// //override toJSON!!
// pet.toJSON = function(){
//     console.log(this)
//     return {}
// }

// console.log('pet json',JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/users')
// const main = async() => {
//     // const task = await Task.findById('5f7aa5b7ce92463726a4366a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f7aa389db400537002c45b1')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()