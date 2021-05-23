import { support } from '..';

export const row = (data) => {
  const table = support.qs('.table-content');
  let tableRow = '';
  data.forEach(el => {
    tableRow +=
      `
      <div class="table__row" data-id="${el._id || el.id}">
        <div contenteditable="false" data-name="firstName" class="table__row-item table-body col-md" title="${el.firstName}">${el.firstName}</div>
        <div contenteditable="false" data-name="lastName" class="table__row-item table-body col-md" title="${el.lastName}">${el.lastName}</div>
        <div contenteditable="false" data-name="age" class="table__row-item table-body col-sm" title="${el.age}">${el.age}</div>
        <div contenteditable="false" data-name="city" class="table__row-item table-body col-md" title="${el.city}">${el.city || '-'}</div>
        <div contenteditable="false" data-name="phone" class="table__row-item table-body col-lg" title="${el.phone}">${el.phone || '-'}</div>
        <div contenteditable="false" data-name="email" class="table__row-item table-body col-lg" title="${el.email}">${el.email}</div>
        <div class="table__row-delete" id="deleteRow" data-id="${el._id || el.id}">&times;</div>
        <div contenteditable="false" data-name="company"  class="table__row-item table-body col-lg" title="${el.company}">${el.company || '-'}</div>
      </div>
    `;
  });
  table.innerHTML = tableRow;
};

