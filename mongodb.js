// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' // use full ip
const databaseName = 'task-manager'

const id = new ObjectID()



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }
    console.log('Connected correctly!')


    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description:'Clean the house'
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>console.log(e))

})

    // db.collection('users').deleteMany({
    //     age:28
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })



//       db.collection('users').insertMany(
//         [{
//             name: 'raghu',
//             age: 28
//         },
//         {
//             name: 'jeeva',
//             age: 29
//         }
//         ], (error, result) => {
//             if (error) {
//                 console.log(error)
//             }
//             console.log( result.ops)
//         })

// db.collection('tasks').insertMany([{
//         description:'Clean the house',
//         completed:true
//     },{
//         description:'Renew inspection',
//         completed:false
//     },{
//         description:'Pot plants',
//         completed:false
//     }

// ],(error,result)=>{
//     if(error){
//         return console.log('unable to insert tasks')
//     }
//     console.log(result.ops)
// })







// db.collection('tasks').updateMany({
//     completed: false
// }, {
//     $set: {
//         completed: true
//     }
// }).then((result) => {
//     console.log(result.modifiedCount)
// }).catch((error) => {
//     console.log(error)
// })

// db.collection('users').findOne({_id:new ObjectID('5f732d60f84f5831a675eefc')},(error,user)=> {
//     if(error){
//         return console.log('Unable to fetch')
//     }
//     console.log('user',user)
// })

//    const updatePromise = db.collection('users').updateOne({
//         _id:new ObjectID('5f731ed61f041a314bf19f19')
//     },{
//         $inc:{
//             age : 2
//         }
//     })

//     updatePromise.then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })

    // db.collection('tasks').findOne({_id:new ObjectID('5f732e3a6732f631b0d8e5b0')},(error,task)=>{
    //     console.log('task',task)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     console.log('tasks',tasks)
    // })


    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({age:27}).count((error,count)=>{
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'vikram',
    //     age: 26
    // },(error,result)=>{
    //         if(error) {
    //             return console.log('unable to insert user')
    //         }
    //         console.log('results',result.ops)
    // })


// console.log('id',id) // GU ID
// console.log('timestamp',id.getTimestamp())
// console.log('id.id',id.id)
// console.log('id hexa',id.toHexString().length)
  

