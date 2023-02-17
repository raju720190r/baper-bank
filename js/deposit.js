document.getElementById('deposit-button').addEventListener('click', function(){
    const depositField =document.getElementById('deposit-input');
    const depositAmount = depositField.value;
    
    const depositTotalElement = document.getElementById('total-deposit');
    const previousdepositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;



    
    // last step 
    depositField.value ='';
})