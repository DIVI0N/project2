import { deleteRow, changeRowData, blurRow } from './events';

export default function tableEvent() {
  const table = document.querySelector('#mainTable');

  table.addEventListener('click', deleteRow);
  table.addEventListener('dblclick', () => {
    changeRowData(e);
    e.target.addEventListener('blur', blurRow);
  });

}

