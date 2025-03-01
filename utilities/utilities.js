function getInputByID(id){
    let value = document.getElementById(id).value 
    let convertedValue = parseFloat(value)
    return convertedValue
}