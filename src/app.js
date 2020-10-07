const express = require('express')
const app = express()

// const port = process.env.PORT || 3000

const port = process.env.PORT

require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

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
const multer = require('multer')
const upload = multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        // if(!file.originalname.endsWith('.pdf')){
            if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a Word document'))
        } 
        cb(undefined,true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined,true)
        // cb(undefined,false)
    }
})

// const errorMiddleware = (req,res,next) => {
//     throw new Error('from my middleware')
// }

app.post('/upload', upload.single('upload'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})

app.use(express.json()) // first express json and then routes otherwise req will be null
app.use(userRouter)
app.use(taskRouter)


// app.listen(port, () => {
//     console.log('server running at port ' + port)
// })

module.exports=app