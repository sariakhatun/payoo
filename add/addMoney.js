document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    let amount = getInputByID('amount')
    console.log(amount)
    let pin = getInputByID('digit');
    console.log(pin)
})