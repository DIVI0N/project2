import { getData, row, support, url } from '..';

export default async function getPerson() {
  const { database } = url;
  const { lsGet } = support;
  const dbName = lsGet('db') || 'mysql';

  const getPersons = await getData(`${database}/${dbName}`);
  const persons = await getPersons.json();

  row(persons.message);
}
