// ? Grabbing the Elements

const form = document.getElementById('input_form');
const f_name = document.getElementById('f_name');
const l_name = document.getElementById('l_name');
const city = document.getElementById('city');
const institute = document.getElementById('institute');
const num_subj = document.getElementById('nos');
const count = document.getElementById('count');
const enter = document.getElementById('enter');
const name_subj = document.getElementById('n_subj');
const msg = document.getElementById('msg');
const tot = document.getElementById('tot');
const obt = document.getElementById('obt');
const next = document.getElementById('next');
const subj_box = document.getElementById('subj_box');
const submit = document.getElementById('submit');

// Students Marks Array
const subject = [];
const student = {};
// * Incrementing the counter
let i = 1;
next.addEventListener('click', () => {
  if (
    i <= +num_subj.value &&
    name_subj.value != ' ' &&
    tot.value != ' ' &&
    obt.value != ' '
  ) {
    i++;
    // * Storing the value in the Object
    let user = {};
    user.name = name_subj.value;
    user.total = tot.value;
    user.obt = obt.value;
    subject.push(user);

    // Get the Input Empty
    count.innerHTML = i;
    name_subj.value = ' ';
    tot.value = ' ';
    obt.value = ' ';
    if (i > +num_subj.value) {
      subj_box.style.display = 'none';
      submit.style.display = 'block';
    }
  } else {
    msg.style.display = 'block';
    const myTimeout = setTimeout(function () {
      msg.style.display = 'none';
    }, 3000);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault;
  alert('helo');
});
console.log(subject);
