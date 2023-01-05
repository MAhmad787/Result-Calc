// * Grabbing the elements

const f_name = document.getElementById('f_name');
const l_name = document.getElementById('l_name');
const clas = document.getElementById('class');
const nos = document.getElementById('nos');
const sbj_count = document.getElementById('sbj-count');
const sbjt_name = document.getElementById('sbj-name');
const sbjt_tot = document.getElementById('sbj-tot');
const sbjt_obt = document.getElementById('sbj-obt');
const next = document.getElementById('next');
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const stnd = document.querySelector('.stnd');
const subject = document.querySelector('.subject');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');
const sbj_name = document.querySelector('.sbjt-name');
const sbj_obt = document.querySelector('.obt');
const sbj_tot = document.querySelector('.tot');

const usr_subject = {};
let i = 1;
next.addEventListener('click', () => {
  if (
    i < +nos.value &&
    sbjt_name.value != ' ' &&
    sbjt_tot.value != ' ' &&
    sbjt_obt.value != ' '
  ) {
    i++;
  }

  usr_subject.name = sbjt_name.value;
  usr_subject.tot = sbjt_tot.value;
  usr_subject.obt = sbjt_obt.value;

  sbj_count.innerHTML = i;
  sbjt_name.value = ' ';
  sbjt_tot.value = ' ';
  sbjt_obt.value = ' ';
});

form.addEventListener('click', (e) => {
  e.preventDefault();

  //////////////////
  name1.innerHTML = f_name.value;
  name2.innerHTML = l_name.value;
  stnd.innerHTML = clas.value;
  subject.innerHTML = nos.value;
  sbj_name.innerHTML = usr_subject.name;
  sbj_tot.innerHTML = usr_subject.tot;
  sbj_obt.innerHTML = usr_subject.obt;
});
