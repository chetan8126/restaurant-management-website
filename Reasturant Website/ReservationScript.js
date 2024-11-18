document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
  
    // You can perform additional validation here if needed
    
    // Display reservation message
    const message = document.getElementById('message');
    message.innerHTML = `Thank you, ${name}! Your table for ${guests} guests has been reserved on ${date} at ${time}. We'll send a confirmation email to ${email}.`;
    message.style.color = 'green';
  });
  