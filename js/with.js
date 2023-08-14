document.getElementById('with-btn').addEventListener('click', function(){
    const withInput = document.getElementById('with-input');
    const withValueString = withInput.value;
    const withValueNum = parseFloat(withValueString);

    const withAmount = document.getElementById('with-amount');
    const withAmountString = withAmount.innerText;
    const withAmountNum = parseFloat(withAmountString);

    withAmount.innerText = withAmountNum + withValueNum;

    const balance = document.getElementById('balance-amount');
    const balanceAmountString = balance.innerText;
    const balanceAmountNum = parseFloat(balanceAmountString);

    balance.innerText = balanceAmountNum - withValueNum;



    withInput.value = '';

})