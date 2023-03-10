const wakeUp = new Promise(function (resolve) {
  setTimeout(() => {
    resolve('Wake up')
  },500)
}).then(function(value) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log(value)
      resolve('Take a shower')
    },1000)
  })
}).then(function(value) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log(value)
      resolve('Have a breakfast')
    },1500)
  })
}).then(function(value) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log(value)
      resolve('Go to work')
    },2000)
  })
}).then(function(value) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log(value)
      resolve('Learn JS')
    },2500)
  })
}).then(function(value) {
  setTimeout(() => {
    console.log(value)
  },3000)
})

