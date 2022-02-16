
function inputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValueNumber = parseFloat(inputValueText);
    // clear input field
    inputField.value = '';
    return inputValueNumber;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    // get food value

    // const foodInput = document.getElementById('food-input');
    // const foodAmountText = foodInput.value;
    // const foodAmount = parseFloat(foodAmountText);
    const foodAmount = inputValue('food-input')
    // get rent value

    // const rentInput = document.getElementById('rent-input');
    // const rentAmountText = rentInput.value;
    // const rentAmount = parseFloat(rentAmountText);
    const rentAmount = inputValue('rent-input')
    // get clothes value

    // const clothesInput = document.getElementById('clothes-input');
    // const clothesAmountText = clothesInput.value;
    // const clothesAmount = parseFloat(clothesAmountText);
    const clothesAmount = inputValue('clothes-input')
    // set total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalCost = foodAmount + rentAmount + clothesAmount;
    totalExpenses.innerText = totalCost;
    // get income value
    // const incomeInput = document.getElementById('income-input')
    // const incomeAmountText = incomeInput.value;
    // const incomeAmount = parseFloat(incomeAmountText);
    const incomeAmount = inputValue('income-input')
    // set balance
    const totalBalance = document.getElementById('total-balance');
    const newBalance = incomeAmount - totalCost;
    totalBalance.innerText = newBalance;
    // clear the input field
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
    incomeInput.value = '';
})