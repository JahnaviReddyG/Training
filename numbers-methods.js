let num = 103.99999
console.log(Math.round(num))
let min = 10
let max = 20
let numbers = function(min,max)
{
  let values = Math.floor(Math.random()*(max - min) + min)
  return values
}
let value = numbers(10,20)
console.log(value)
console.log(Math.random())

let guess = function(jikki)
{
    min = 1
    max = 5
    let currentvalues = Math.floor(Math.random()*(max - min))
    console.log(currentvalues)
    if(jikki == currentvalues)
    {
        return true
    }
    else
    {
        return false
    }
}
let returnvalue = guess(2)
console.log(returnvalue)
