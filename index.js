
function takeANumber(array, name){
  let spot = array.length + 1
  array.push(name)
  return "Welcome, " + name + ". You are number " + spot + " in line."
}

function nowServing (array) {
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let person = array[0]
    return `Currently serving ${person}.`
    nowServing(array.unshift())
  }
}
