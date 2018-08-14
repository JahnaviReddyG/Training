let myaccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0,
}

let addExpenses =  function(account,amount) {
   account.income = account.income +amount
 }

 let addIncome = function(account,income) {
     account.income = account.income + income
 }

 let resetAcoount = function(account) {
     let balance = account.income - account.expenses
     return `Account for ${account.name} has $${balance}. $${account.income} in income.`
 }
 addIncome(myaccount,2000)
 addExpenses(myaccount,2.50)
 console.log(resetAcoount(myaccount))