/**
 * cash out section
 */

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    let pin = document.getElementById('pin-cash-out').value 
    let convertedPin= parseInt(pin);
    let amount = document.getElementById('amount-cash-out').value;
    let convertedAmount = parseFloat(amount);
    let mainBalance = document.getElementById('main-balance').innerText
    let convertedBalance = parseFloat(mainBalance)
    
    if(convertedPin === 1234){
        let sum = convertedBalance - convertedAmount;
        document.getElementById('main-balance').innerText=sum
       alert('Cash out successfully')
    }else{
        alert('incorrect pin')
    }
})