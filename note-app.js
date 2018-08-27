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
//console.log("this is an external script") ocument object isgib=ven by browser
const ps = document.querySelectorAll('p')
//console.log(p)
//queryselectorall iused to select all p tags in htnl 
//ps.forEach(function(a)
//{
  // a.remove()
  //console.log(a.textContent)
  
//})

//add a new element
//const newParagraph = document.createElement('p')
//newParagraph.textContent = "this is new element from javascript"
//document.querySelector('body').appendChild(newParagraph)
document.querySelector('button').addEventListener('click',function(e){
  //  console.log('did this work')
   // console.log(e)
e.target.textContent = 'the button was clicked'
})
//document.querySelectorAll('button')[1].addEventListener('click',function(e){
  //  e.target.textContent = 'the button was clicked'
//})
document.querySelector('#python').addEventListener('input',function(e){
console.log(e.target.value)
})
/*const filters = {
    searchText: ''
}
const renderNotes = function(notes,filters){
    const filterNotes = notes.filters(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filterNotes)
}
renderNotes(notes,filters)*/
document.querySelector('#name-form').addEventListener('submit',function(e){
e.preventDefault()
console.log(e.target.elements.firstname.value)
e.target.elements.firstname.value=''
})
