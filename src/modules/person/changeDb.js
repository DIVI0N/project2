import { getPerson, support } from '..';

export default function changeDb() {
  const { lsSet, lsGet, qs } = support;
  const dbSelect = qs('#dbSelect');

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