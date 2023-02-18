const button = document.querySelector('.button-cars');

button.addEventListener('click', () => {
  // console.log('Button was clicked');
  document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
});

const buttonRent = document.querySelectorAll('.car-button');
for (let i = 0; i < buttonRent.length; i++) {
  buttonRent[i].onclick = function () {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  };
}

// buttonRent.addEventListener('click', () => {
//   console.log('Button was clicked');

//   document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
// });

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, phone, car },
  } = event.currentTarget;

  if (name.value === '' || phone.value === '' || car.value === '') {
    return alert('Заполните все поля!');
  }
  alert('Спасибо за заявку!');
  console.log(`name: ${name.value}, phone: ${phone.value}, car: ${car.value}`);
  event.currentTarget.reset();
}
