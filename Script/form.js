document.getElementById('form2').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
  
    // Get form elements
    const email = document.getElementById('email');
    const text = document.getElementById('text');

    const emailError = document.getElementById('emailError');
    const textError = document.getElementById('textError')
  
    let isValid = true;

    // Validate EMAIL
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Por favor ingresar un mail válido.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    //Validate TEXT
    if (text.value.trim() === '') {
        textError.textContent = 'Por favor ingresar un mensaje.';
        isValid = false;
      } else {
        textError.textContent = '';
      }
  
    // If valid, submit form or show success message
    if (isValid) {
        alert('Form submitted successfully!');
        this.submit()
      // Optionally, you can use: this.submit();
    }
  });