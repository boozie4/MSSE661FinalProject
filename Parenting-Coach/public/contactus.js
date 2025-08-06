document.getElementById('contactForm').addEventListener('submit', async function(event) {
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

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        const data = await res.json();
        if (data.success) {
            responseMessage.style.color = 'green';
            responseMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
            document.getElementById('contactForm').reset();
        } else {
            responseMessage.style.color = 'red';
            responseMessage.textContent = data.error || 'Failed to send message.';
        }
    } catch (err) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Failed to send message.';
    }
});
