
 function trueOrFalse (param) {
  if (typeof param  === 'string'){
    return 'favor digite um numero'
  } else if (param){
    return true
  } else{
  return false
  }
}

module.exports = trueOrFalse;

