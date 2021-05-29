import { deleteRow, changeRowData, blurRow, sortByData } from './events';

export default function tableEvent() {
  const table = document.querySelector('#mainTable');

  table.addEventListener('click', (e) => {
    deleteRow(e);
    sortByData(e);

  });

  table.addEventListener('dblclick', (e) => {
    changeRowData(e);
    e.target.addEventListener('blur', blurRow);
  });
}

