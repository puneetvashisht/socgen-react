console.log('starting...');

// function task(callback){
//     setTimeout(()=> {
//         console.log('doing some task...');
//         callback("success")
//     }, 2000) 
// }

//es6 feature - promise - async 
function task(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('doing some task...');
            reject("failure")
        }, 2000) 
    })
}

task()
.then((res) => console.log(res))
.then(() => console.log('second'))
.catch((err)=> console.log(err))


// fetch('url')
// .then(data=> log(data))

// let result = task();
// console.log(result);

// callback hell
// task1((result)=> {
//     task2(()=> {
//         task3(()=> {
        
//         })
//     })
// })

console.log('finishing...');