require('../src/db/mongoose')

const User = require('../src/models/users')

// User.findByIdAndUpdate('5f743131b599d308c098984c',{age:1}).then((user)=>{
//     console.log('user',user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log('result',result)
// }).catch((e)=>{
//     console.log(e)
// })

// const updateAgeandCounr = async (id,age)=>{
//     const user =await User.findByIdAndUpdate(id,{age:age})
//     const count =await User.countDocuments({age})
//     return count
// }
// updateAgeandCounr('5f7473f482e9650d9a1cb5b7',2).then((count)=>{
//     console.log('count',count)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async(id,age) => {
    const user = await User.findByIdAndUpdate(id,{age:age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5f7473f482e9650d9a1cb5b7',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})