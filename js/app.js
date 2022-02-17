function inputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValueNumber = parseFloat(inputValueText);
    // error handling
    if(inputValueNumber < 0){
        alert('Please, give a positive value in the input field')
    }
    // error handling
    if(isNaN(inputValueNumber)){
        alert('Please, give a number value in the input field.')
    }
    // clear input field
    // inputField.value = '';
    return inputValueNumber;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    // get income value
    const incomeAmount = inputValue('income-input');
    // get food value
    const foodAmount = inputValue('food-input')
    // get rent value
    const rentAmount = inputValue('rent-input')
    // get clothes value
    const clothesAmount = inputValue('clothes-input')
    // set total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalCost = foodAmount + rentAmount + clothesAmount;
    totalExpenses.innerText = totalCost;
    // set balance
    const totalBalance = document.getElementById('total-balance');
    const newBalance = incomeAmount - totalCost;
    totalBalance.innerText = newBalance;
    // error handling
    if(totalCost > incomeAmount){
        alert("You don't have enough money to spend.");
        totalExpenses.innerText = 0;
        totalBalance.innerText = 0;
    }
})
document.getElementById('save-btn').addEventListener('click', function(){
    // get income value
    const incomeAmount = inputValue('income-input');
    // get food value
    const foodAmount = inputValue('food-input')
    // get rent value
    const rentAmount = inputValue('rent-input')
    // get clothes value
    const clothesAmount = inputValue('clothes-input')
    // set total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalCost = foodAmount + rentAmount + clothesAmount;
    totalExpenses.innerText = totalCost;
    // set balance
    const totalBalance = document.getElementById('total-balance');
    const newBalance = incomeAmount - totalCost;
    totalBalance.innerText = newBalance;
    // saving amount calculation
    const savingNumber = inputValue('saving-id');
    const savingPercentage = savingNumber / 100;
    const savingTotal = Math.round (incomeAmount * savingPercentage);
    
    // set saving amount
    const totalSavingAmount = document.getElementById('total-saving');
    totalSavingAmount.innerText = savingTotal;
    // set remaining balance
    const remainingBalance = document.getElementById('total-remaining');
    const newRemainingBalance = newBalance - savingTotal;
    remainingBalance.innerText = newRemainingBalance;
    // error handling
    if(newBalance < savingTotal){
        alert("You don't have enough money to save.");
        totalSavingAmount.innerText = 0;
        remainingBalance.innerText = newBalance;
    }
})