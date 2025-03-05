document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let responseMessage = document.getElementById('responseMessage');
    
    if (name === '' || email === '' || message === '') {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'All fields are required!';
        return;
    }
    
    responseMessage.style.color = 'green';
    responseMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
    
    document.getElementById('contactForm').reset();
});
