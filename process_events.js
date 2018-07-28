// process exit event listener
process.on('exit', ()=>{
  console.log('see you soon')
})

// trigger exit event
setTimeout(()=>{process.exit(0)}, 5000)
process.on('unCaughtException', (p1, p2)=>{
  console.log(p1)
console.log(p2)
})


// process unhandledRejection event listener
process.on('unhandledRejection', (reason, p)=>{
  console.log(`未处理的 Promise rejection：`, p)
console.log(`  原因： ${ reason } \n`)
})

//trigger unhandledRejection excption
async function foo() {
  throw new Error('intentionally made error')
}

foo()

// process uncaughtException
process.on('uncaughtException' ,(err)=>{
  console.log("process caught an uncaughtException \n", err)
})

//trigger uncaughtException
setTimeout( ()=>{
  nonExistentFunc()
},  2000)


