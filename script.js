// * Grabbing the elements

const f_name = document.getElementById('f_name');
const l_name = document.getElementById('l_name');
const clas = document.getElementById('class');
const nos = document.getElementById('nos');
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const stnd = document.querySelector('.stnd');
const subject = document.querySelector('.subject');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  name1.innerHTML = f_name.value;
  name2.innerHTML = l_name.value;
  stnd.innerHTML = clas.value;
  subject.innerHTML = nos.value;
});
