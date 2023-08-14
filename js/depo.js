document.getElementById('depo-btn').addEventListener('click', function(){
    const depoInput = document.getElementById('depo-input');
    const depo = depoInput.value;


    const depoAmount = document.getElementById('depo-amount');
    const depoTotal = depoAmount.innerText;
    depoAmount.innerText = parseFloat(depoTotal)+ parseFloat(depo);


    const balanceAmount = document.getElementById('balance-amount');
    const balanceTotal = balanceAmount.innerText;


    balanceAmount.innerText = parseFloat(balanceTotal) + parseFloat(depo);
    
    
    depoInput.value = '';
})