import { support } from '..';

export default function theme() {
  const { lsGet, lsSet, qs } = support;

  const select = qs('#theme');
  const theme = lsGet('theme') ?? lsSet('theme', select.value);

  select.value = theme;

  select.addEventListener('change', (e) => {
    lsSet('theme', e.target.value);
    if (lsGet('theme') === 'dark') {
      document.querySelector('.two').style.background = 'rgba(0, 0, 0, 0.85)';
    } else {
      document.querySelector('.two').style.background = '#F8F8F8';
      const inputs = document.querySelectorAll('input');
      inputs.forEach((el) => { });
    }
  });
}

let item1 = document.querySelector('.two');
let item2 = document.querySelector('.two_navigation');
let item3 = document.querySelector('.two_navigation_language');
let item4 = document.querySelector('.two_navigation_theme');
let item5 = document.querySelector('.two_datebase_container-title');
let item6 = document.querySelector('.two_datebase_container_dropdown');
let item7 = document.querySelector('.two_datebase_container_client');
let item8 = document.querySelector('.input_find');
console.log(item8);
// let item10 = document.querySelector('.two_datebase_container_client_text');
// let item11 = document.querySelector('.two_datebase_container_client_text');


// let newObj = {};
// newObj.item1 = 'two';
// newObj.item2 = 'two_navigation';
// newObj.item3 = 'two_navigation_language';
// newObj.item4 = 'two_navigation_theme';
// newObj.item5 = 'two_datebase_container-title';
// newObj.item6 = 'two_datebase_container_dropdown';
// newObj.item7 = 'two_datebase_container_client';
// newObj.item8 = 'input_find';


// let element;
// for (const key in newObj) {
//   if (newObj.hasOwnProperty.call(newObj, key)) {
//     element = `${newObj[key]}--dark`;
//     console.log(element);
//   }

//       item1.classList.add(element);
//       item2.classList.add(element);
//       item3.classList.add(element);
//       item4.classList.add(element);
//       item5.classList.add(element);
//       item6.classList.add(element);
//       item7.classList.add(element);
//       item8.classList.add(element);
// }
// console.log('newObj', newObj);