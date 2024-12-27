const form = document.getElementById('myform');
const message = document.getElementById('message');
 
form.addEventListener('submit', function(event){
    event.preventDefault();

    message.textContent = 'you have submited.'
});