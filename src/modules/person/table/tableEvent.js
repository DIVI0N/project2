import { deleteRow } from './events';

export default function tableEvent() {
  const table = document.querySelector('#mainTable');

  table.addEventListener('click', (e) => {
    deleteRow(e);
  });
}

