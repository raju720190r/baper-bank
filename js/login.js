document.getElementById('submit-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // PassWord 
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    if(email === 'dj@gmail.com' && password == 1122){
        window.location.href = 'bank.html'
    }
    else{
        alert('tmi vul jinish diyecho')
    }
})

// document.getElementById('submit-button').addEventListener('click', function(){
//     console.log('function button click')
//     const emailField = document.getElementById('user-email')
//     const email = emailField.value;
// // Password field
//     const passwordField = document.getElementById('user-password')
    const password = passwordField.value;

    
//     if (email === 'raju@gmail.com' && password === 1122){
//                window.location.href = 'bank.html';
//     else{
//         alert('ki botsho password vule gesos');
//     }
//     }
// })
// get password