const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji przesyłania formularza (czyli odświeżeniu strony)

    const formData = {};
    const formInputs = this.elements;

    for (let input of formInputs) {
      if (input.type !== 'submit') {
        formData[input.name] = input.value;
        if (!input.value.trim()) {
          alert('Please fill in all fields.');
          return;
        }
      }
    }

    console.log(formData);
    this.reset(); // Wyczyść wartości pól formularza
  });
