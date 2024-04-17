  const counterValue = document.getElementById('value');
  let currentValue = 0;

  const incrementButton = document.querySelector('button[data-action="increment"]');
  const decrementButton = document.querySelector('button[data-action="decrement"]');

  incrementButton.addEventListener('click', () => {
    currentValue += 1;
    counterValue.textContent = currentValue;
  });

  decrementButton.addEventListener('click', () => {
    currentValue -= 1;
    counterValue.textContent = currentValue;
  });

