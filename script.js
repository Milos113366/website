//window.alert('Ovo je sajt vremenske prognoze!!');

function tempcalculator(){

    let unetoTemp = document.querySelector('#tempF');

    let brojnoTemp = parseFloat(unetoTemp.value);

    let tempC = (brojnoTemp - 32) * 5/9;
    tempC = tempC.toFixed(1);

        
let newElement = document.createElement('div');
newElement.className = 'new-value';
newElement.innerText = `${brojnoTemp} stepeni Fahrenheit-a je isto sto i ${tempC} stepeni Celsius-a`;
console.log(newElement.innerText);
document.querySelector('.container').appendChild(newElement);

}
