const error = document.getElementsByClassName('error');
const form = document.getElementsByClassName('form');
let email = document.getElementById('email');
let regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


form[0].addEventListener('submit', (e)=> 
{   
    if(!regex.test(email.value)) 
    {
        error[0].textContent = 'Please provide a valid email address';
        email.style.borderColor= 'var(--Lightred)';
        e.preventDefault();
    }
})
email.addEventListener('focus', ()=> {
    error[0].textContent ='';
    email.style.borderColor= 'var(--PaleBlue)';
})
