// let myPromise = new Promise(function(resolve) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     console.log('success')
//   })
//   .then(function(number) {
//     console.log(number);
//   })
//   .catch(function(){
//     console.log('fail')
//   })
//   .finally(function(){
//     console.log('complete')
//   });

const randomNumberPromise = new Promise((res, rej) =>{
  setTimeout(() => {
    const randomVal = Math.random()
    console.log(`randomVal ${randomVal}`)
    if( randomVal > 0.5 ){
      res(randomVal)
    }else if(randomVal <= 0.5){
      rej(randomVal)
    }
  }, 1000);
})

randomNumberPromise.then((value) => {
  console.log('Success')
})
.catch(function(){
    console.log('fail')
  })
.finally(function(){
    console.log('complete')
});