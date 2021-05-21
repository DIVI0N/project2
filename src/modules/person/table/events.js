import { getData, getPerson, support, url } from '../..';

export const deleteRow = (e) => {
  const { lsGet } = support;
  if (e.target.getAttribute('id') === 'deleteRow') {
    const id = e.target.getAttribute('data-id');
    const delUrl = `${url.database}/${lsGet('db')}?id=${id}`;
    getData(delUrl, 'DELETE');
    getPerson();
  }
};