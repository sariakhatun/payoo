/**
 * add money section
 */

let addMoney = document.getElementById('btn-add-money');
addMoney.addEventListener('click',function(event){
    event.preventDefault()
    //console.log('money added')
    let amount = document.getElementById('amount').value 
    //console.log(amount)
    let convertedAmount = parseFloat(amount)
    let pin = document.getElementById('digit').value
    let convertedPin = parseInt(pin);
    let mainBalance = document.getElementById('main-balance').innerText
    let convertedBalance = parseFloat(mainBalance)
    if(amount && pin){
        if(convertedPin === 1234){
            let sum = convertedAmount + convertedBalance
            document.getElementById('main-balance').innerText=sum
            alert('money added successfully')
            getInputByID()
        } else {
            alert('incorrect pin. Please enter the correct pin')
        }
    } else{
        alert('enter amount')
    }
})

