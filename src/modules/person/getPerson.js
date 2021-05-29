import { getData, row, support, url } from '..';

export default async function getPerson() {
  const { database } = url;
  const { lsGet } = support;
  const dbName = lsGet('db') || 'mysql';

  const getPersons = await getData(`${database}/${dbName}`);
  if (getPersons.statusText === 'Unauthorized') {
    location.replace(`${url.client}/index.html`);
  }
  const persons = await getPersons.json();
  row(persons.message);
}

