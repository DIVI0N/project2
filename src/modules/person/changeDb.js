import { getPerson, support } from '..';

export default function changeDb() {
  const { lsSet, lsGet } = support;
  const dbSelect = document.querySelector('#dbSelect');

  dbSelect.value = lsGet('db');
  if (!lsGet('db')) {
    dbSelect.value = 'mysql';
  }
  lsSet('db', dbSelect.value);

  dbSelect.addEventListener('change', (e) => {
    lsSet('db', e.target.value);
    getPerson();
  });
}