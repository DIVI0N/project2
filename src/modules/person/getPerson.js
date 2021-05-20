import { getData, row, support, url } from '..';

export default async function getPerson() {
  const { main, database } = url;
  const { lsGet } = support;
  const dbName = lsGet('db') || 'mongodb';

  // const getPersons = await fetch(`${main}${database}/${dbName}`);
  const getPersons = await getData(`${database}/${dbName}`);
  const persons = await getPersons.json();
  console.log(persons);
  row(persons.message);
}