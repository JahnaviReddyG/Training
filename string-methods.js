let password = 'abc123password983'
console.log(password.includes('password'))
let validPassword = function(name)
{
     if(name.length>8 && !name.includes('password'))
    {
        return true
    }
    else
    {
         return false
    }
}
console.log(validPassword('hellopassword'))