const {calcTip,celsiusToFahrenheit,fahrenheitToCelsius,add} = require('../src/math')

test('should calculate total with tip',() => {
    const total = calcTip(10,.3)
    expect(total).toBe(13)
    // if(total !== 13) {
    //     throw new Error('total must be 13 '+ total)
    // }
})

test('should calc total with default tip',()=>{
    const total = calcTip(10)
    expect(total).toBe(12.5)
})

test('should 32 F to 0C ',()=>{
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})
test('should 0C to 32F ',()=>{
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo',(done)=>{
//     setTimeout(() => {
//      expect(1).toBe(2)
//      done()
//     }, 2000); 
// })

test('should add two numbs',(done)=>{
    add(2,3).then((sum)=>{
        expect(sum).toBe(5)
        done()
    })
})

test('should add two number async/await',async()=>{
    const sum=await add(10,22)
    expect(sum).toBe(32)
})



// test('hello world',() => {

// })  

// test('this should fail',() => {
//     throw new Error('FAILURE')
// })  
// Saves time,creating reliable software,flexibility to developers(refactoring,collab,profiling,peace of mind :))