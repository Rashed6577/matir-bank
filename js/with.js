document.getElementById('with-btn').addEventListener('click', function(){
    const withInput = document.getElementById('with-input');
    const withValueString = withInput.value;
    const withValueNum = parseFloat(withValueString);
    if(isNaN(withValueNum)){
        alert('Please provide a valid amount');
        return;
    }

    const withAmount = document.getElementById('with-amount');
    const withAmountString = withAmount.innerText;
    const withAmountNum = parseFloat(withAmountString);
    withInput.value = '';


    const balance = document.getElementById('balance-amount');
    const balanceAmountString = balance.innerText;
    const balanceAmountNum = parseFloat(balanceAmountString);

    if(withValueNum > balanceAmountNum){
        alert('balance not found');
        return;
    }

    balance.innerText = balanceAmountNum - withValueNum;

    withAmount.innerText = withAmountNum + withValueNum;

    

})