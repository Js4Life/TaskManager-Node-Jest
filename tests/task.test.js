const request = require('supertest')
const {userOne,
    setupDatabase,
    userTwo,
    taskOne,
    taskTwo,
    taskThree} = require('./fixtures/db')
const app = require('../src/app')
const Task = require('../src/models/task')


beforeEach(setupDatabase)

test('Should create task for user',async ()=>{
    const reponse = await request(app)
    .post('/tasks')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        description:'From my test'
    }).expect(201)
    const task = await Task.findById(reponse.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('should fetch user tasks', async()=>{
    const response = await request(app)
    .get('/tasks')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send().
    expect(200)

    expect(response.body.length).toEqual(2)
})

test('Should not delete 2nd user to delete first users task',async ()=>{
        const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization',`Bearer ${userTwo.tokens[0].token}`).send().expect(404)
        const task = Task.findById(taskOne._id)
        expect(task).not.toBeNull()
})