import { getData, row, support, url } from '..';

export default async function getPerson() {
  const { database } = url;
  const { lsGet } = support;
  const dbName = lsGet('db') || 'mysql';

  const getPersons = await getData(`${database}/${dbName}`);
  const persons = await getPersons.json();
<<<<<<< HEAD
=======

>>>>>>> 79602941ae1d251844d63b396be1e004756d50d9
  row(persons.message);
}
