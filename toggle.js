let moneyAdd = document.getElementById('add-money')
let addForm = document.getElementById('add-form')
let cashOut = document.getElementById('cash-out')
let cashOutForm = document.getElementById('cash-out-form')
moneyAdd.addEventListener('click',function(){
    addForm.style.display='block'
    cashOutForm.style.display='none'
})
cashOut.addEventListener('click',function(){
    addForm.style.display='none'
    cashOutForm.style.display='block'
})