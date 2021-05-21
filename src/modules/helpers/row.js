import { support } from '..';

export const row = (data) => {
  const table = support.qs('.table-content');
  let tableRow = '';
  data.forEach(el => {
    tableRow +=
      `
      <div class="table__row" data-id="${el._id || el.id}">
        <div class="table__row-item col-md" title="${el.firstName}">${el.firstName}</div>
        <div class="table__row-item col-md" title="${el.lastName}">${el.lastName}</div>
        <div class="table__row-item col-sm" title="${el.age}">${el.age}</div>
        <div class="table__row-item col-md" title="${el.city}">${el.city || '-'}</div>
        <div class="table__row-item col-lg" title="${el.phone}">${el.phone || '-'}</div>
        <div class="table__row-item col-lg" title="${el.email}">${el.email}</div>
        <div class="table__row-delete" id="deleteRow" data-id="${el._id || el.id}">&times;</div>
        <div class="table__row-item col-lg" title="${el.company}">${el.company || '-'}</div>
      </div>
    `;
  });
  table.innerHTML = tableRow;
};

