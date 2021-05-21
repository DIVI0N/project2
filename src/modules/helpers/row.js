import { support } from '..';

export const row = (data) => {
  const table = support.qs('.table');
  data.forEach(el => {
    const div = document.createElement('div');
    div.classList.add('table__row');
    div.setAttribute('data-id', el._id);
    div.innerHTML = `
      <div class="table__row-item">${el.firstName}</div>
      <div class="table__row-item">${el.lastName}</div>
      <div class="table__row-item">${el.age}</div>
      <div class="table__row-item">${el.city}</div>
      <div class="table__row-item">${el.phone}</div>
      <div class="table__row-item">${el.email}</div>
      <div class="table__row-item">${el.company}</div>
    `;
    table.appendChild(div);
  });
};

