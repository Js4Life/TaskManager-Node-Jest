require('../src/db/mongoose')

const Task = require('../src/models/task')
const User = require('../src/models/users')

// Task.findByIdAndDelete('5f747371382ce70d886c8b7d').then((task)=>{
//     console.log('task',task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>console.log(e))

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5f7412bad12bd006af513510').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})