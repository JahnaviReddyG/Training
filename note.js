//const notes = ['Note 1','Note 2','Note 3']
//notes.push("note 4")
//console.log(notes.shift())
//notes.unshift('Note 1')
//console.log(notes.length)
//console.log(notes[1])
//notes.splice(1,1)
//console.log(notes) 
/*notes.forEach(function(item,index) {
    console.log(item)
    console.log(index)
})*/
/*for( let count =0;count<=2;count++)
{
    console.log("hello")
}*/
//array of objects
const notes =[{
    title: 'my next trip',
    body: 'I am going to australia'
},{
    title: "hobbits to work om",
    body: "exercise"

},{
     title: "office modification",
     body: "get a new seat"
}]
const findNote = function(notes,noteTitle)
{
const index = notes.findIndex(function(note,index){
    return note.title === noteTitle
})
return notes[index]
}
 const note = findNote(notes,"office modification")
console.log(note)
//if it finds first then it will end there 
/*console.log(notes.indexOf({}))
const index = notes.findIndex(function(note,index){
    console.log(note)
    return note.title === 'hobbits to work om'
})
console.log(index)*/