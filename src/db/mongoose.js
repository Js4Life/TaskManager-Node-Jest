const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             //  console.log('values11',value.toLowerCase().include('password'))
//             if (value.includes('password')) {
//                 throw new Error('Password cannot contain password')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '  Abhi ',
//     email: 'MYEWMADJA@MEAD.IO ',
//     password: 'Phone@098!'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((e) => console.log(e))








// const task = new Task({
//     description: 'Eat       lunch   '
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((e) => console.log(e))

