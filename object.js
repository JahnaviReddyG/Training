let mybook= {
    title: "hello",
    author: "akhil",
    pageCount: 100
}
console.log(`${mybook.title}`)

let person= 
{
    name: 'jakjnesc',
    age: 12,
    location: 'hyderabad'
}
console.log(`${person.name} is ${person.age + 1} and lives in ${person.location} `)

let values = {
    farenhite: 32
}
let convertion = function(numbers)
{
    return
    {
    
        celcius: `${numbers.farenhite}`
    }
}
let returnCelcius = convertion(values)
console.log(returnCelcius.celcius)