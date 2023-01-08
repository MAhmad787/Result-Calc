// ? Grabbing the Elements
// Input Element
const form = document.getElementById('input_form');
const f_name = document.getElementById('f_name');
const l_name = document.getElementById('l_name');
const i_class = document.getElementById('class');
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

// Output Element

const firstName = document.getElementById('o_f_name');
const lastName = document.getElementById('o_l_name');
const Class = document.getElementById('o_class');
const City = document.getElementById('o_city');
const Institute = document.getElementById('o_institute');
const Subject = document.getElementById('subject_name');
const Serial = document.getElementById('sr_number');
const Total = document.getElementById('subject_total');
const Obtained = document.getElementById('subject_obt');

// Students Marks Array
const student = {};
const subject = [];
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
  e.preventDefault();
  student.first_name = f_name.value;
  student.last_name = l_name.value;
  student.class = i_class.value;
  student.city = city.value;
  student.institute = institute.value;

  // Writing value into Element

  firstName.innerHTML = student.first_name;
  lastName.innerHTML = student.last_name;
  Class.innerHTML = student.class;
  City.innerHTML = student.city;
  Institute.innerHTML = student.institute;

  // Creating Elements
  for (let i = 0; i < +num_subj.value; i++) {
    // ! Creating Serial Numbers
    const serialNumber = document.createElement('li');
    serialNumber.innerHTML = i + 1;
    Serial.appendChild(serialNumber);

    // ! Creating Names of Subject
    const subjectName = document.createElement('li');
    subjectName.innerHTML = subject[i].name;
    Subject.appendChild(subjectName);
    // ! Creating Total of Subject
    const Totals = document.createElement('li');
    Totals.innerHTML = subject[i].total;
    Total.appendChild(Totals);
    // ! Creating Total of Subject
    const Obt = document.createElement('li');
    Obt.innerHTML = subject[i].obt;
    Obtained.appendChild(Obt);
  }
});
