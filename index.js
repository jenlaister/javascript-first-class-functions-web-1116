function receivesAFunction(callback){
  callback()
}


function returnsANamedFunction() {
  return watt
}

function watt() {
  return 'Watt'
}


function returnsAnAnonymousFunction() {
  return function () {
  console.log('watt')
  }
}
