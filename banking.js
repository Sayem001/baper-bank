document.getElementById('deposite-btn').addEventListener('click',function(){
    // get input ammount deposited 
    const depositeInput=document.getElementById('deposite-input');
    // make input money string to text
    const newDepositeAmountText=depositeInput.value;
    const newDepositeAmount=parseFloat(newDepositeAmountText);
    // previous deposite total 
    const depositeTotal=document.getElementById('deposite-amount');
    //  make previous deposite total money string to number 
    const previousDepositeText=depositeTotal.innerText;
    const previousDepositeAmount=parseFloat(previousDepositeText);

    // after addition new deposite total 
const newDepositeTotal=previousDepositeAmount+newDepositeAmount;

    depositeTotal.innerText=newDepositeTotal;

    
// update account balance 
const balanceTotal=document.getElementById('balance-total');

const balanceTotalText=balanceTotal.innerText;

const previousBalanceTotal=parseFloat(balanceTotalText);

const newBalanceTotal=previousBalanceTotal+newDepositeAmount;

balanceTotal.innerText=newBalanceTotal;


// clear the deposite field 
    depositeInput.value='';

})

// handle withdraw event handler 

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');

    const withdrawInputText=withdrawInput.value;
    const newWithdrawInputAmount=parseFloat(withdrawInputText);
    // console.log(withdrawInputAmount);

    // set withdraw total 
const windowTotal = document.getElementById('withdraw-total');
const previousWithdrawText=windowTotal.innerText;
const previousWithdrawAmount=parseFloat(previousWithdrawText);

const newWithdrawTotal=previousWithdrawAmount+newWithdrawInputAmount;

windowTotal.innerText=newWithdrawTotal;

// update balance 
const balanceTotal=document.getElementById('balance-total');

const previousBalanceText=balanceTotal.innerText;

const previousBalanceAmount=parseFloat(previousBalanceText);

const newBalanceTotal=previousBalanceAmount-newWithdrawInputAmount;

balanceTotal.innerText=newBalanceTotal;
// clear withdraw input 
withdrawInput.value='';

})
