//let todoone = ['swiming','cycling','writing','reading']
//console.log("the no of todos are"+todoone.length)
//console.log(todoone[0])
//console.log(todoone.slice(0,1))
/*todoone.forEach(function(item,index) {
    if(index == 1 || index==2)
     console.log(index)
})*/
/*for(let count=0;count<todoone.length;count++)
{
    const num = count+1
    const todo = todoone[count]
   console.log(`${num}. ${todo}`)
}*/
const todo = [{
    text: 'order cast food',
    completed: true
},{
    text:'Clean kitchen',
    completed: false
}]

/*const filterNote = function(todo) {
    return todo.filter(function(note){
  return todo.completed == false
})
}
console.log(filterNote(todo))*/
const sortNotes = function(todo) {
    todo.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }
        else if(!b.completed && a.completed){
            return 1
        }
        else
        {
            return 0
        }
      
    })
}
sortNotes(todo)
console.log(todo)
