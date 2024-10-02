// console.log('here is pg');
document.getElementById('btn-login').addEventListener('click', function(event){
  event.preventDefault();  
    console.log('log in btn clicked');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
      console.log('you are logged in');
      window.location.href = '/home.html'
    }
    else{
      alert('Wrong phone number or pin')
    }
})