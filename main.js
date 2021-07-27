'use strict';


let resultTip = 0;
let resultTotal = 0;

const customTips = document.querySelector('#other');
customTips.addEventListener('change', function(){
    document.querySelector('#reset').removeAttribute('disabled');
    const bills = Number(document.getElementById('bills').value);
    const people = Number(document.querySelector('.people').value); 
    if(bills && people){
        resultTip = bills * (Number(customTips.value) /100);
        document.querySelector('#money11').innerHTML = '$' + Math.round(resultTip*100)/100;
        resultTotal = bills/people + resultTip;
        document.querySelector('.total').innerHTML = '$' + Math.round(resultTotal*100)/100;
    } 
})

function getBill(eve){
    document.querySelector('#reset').removeAttribute('disabled');
    const bills = Number(document.getElementById('bills').value);
    const people = Number(document.querySelector('.people').value); 
    if(bills && people){
        resultTip = bills * (eve.value /100);
        document.querySelector('#money11').innerHTML = '$' + Math.round(resultTip*100)/100;
        resultTotal = bills/people + resultTip;
        document.querySelector('.total').innerHTML = '$' + Math.round(resultTotal*100)/100;
    } 
}

function reset(){
    document.querySelector('#money11').innerHTML ='$0.00'
    document.querySelector('.total').innerHTML = '$0.00';
    document.getElementById('bills').value='';
    document.querySelector('.people').value='';
    document.querySelector('#reset').setAttribute('disabled', false);
    customTips.value='';
}



        
        
