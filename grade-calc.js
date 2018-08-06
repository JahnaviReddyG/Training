//students score the total possible score '
//15/20-> you got a 75%
let grade = function(sscore,tscore)
{
    
    let percent = ( sscore/tscore)*100
    if(percent >= 90)
    {
        return 'a'
    }
    else if(percent>=80 && percent<=89)
    {
        return 'b'
    }
    else if(percent>=70 && percent<=79)
    {
        return 'c'
    }
    else if(percent>=60 && percent<=69)
    {
        return 'd'
    }
    else
    {
        return 'f';
    }
}
let grades = grade(20,19)
console.log("the grade  of the student"+grades)