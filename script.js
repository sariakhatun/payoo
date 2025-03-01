let btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', function(event){
   event.preventDefault()
   let accountNumber = document.getElementById('acc-no').value 
   
   let password = document.getElementById('digit').value
   //console.log(accountNumber.length)
   if(accountNumber.length===11){
    if(parseInt(password)===1234){
        window.location.href="./main.html"
    }else{
        console.log('wrong pin')
    }
   }
   else{
    console.log('need valid account')
   }
   
})

