import { getData, getPerson, support, url, getFetch, row } from '../..';

const { lsGet } = support;

export const deleteRow = (e) => {
  if (e.target.getAttribute('id') === 'deleteRow') {
    const id = e.target.getAttribute('data-id');
    const delUrl = `${url.database}/${lsGet('db')}?id=${id}`;
    getData(delUrl, 'DELETE');
    getPerson();
  }
};

export const changeRowData = (e) => {
  if (e.target.classList.contains('table__row-item')) {
    e.target.setAttribute('contenteditable', 'true');
  }
};

export const blurRow = (e) => {
  if (e.target.classList.contains('table-body')) {
    e.target.setAttribute('contenteditable', 'false');
    const query = e.target.parentElement.getAttribute('data-id');
    const blurUrl = `${url.database}/${lsGet('db')}?id=${query}`;
    const dataName = e.target.getAttribute('data-name');
    const body = {
      [dataName]: e.target.textContent
    };
    getFetch(blurUrl, body, 'PUT');
  }
};

export const sortByData = async (e) => {
  if (e.target.classList.contains('head-item')) {
    const query = e.target.getAttribute('data-txt');
    const urlSort = `${url.database}/${lsGet('db')}?sort=${query}`;
    const response = await getData(urlSort);
    const persons = await response.json();
    row(persons.message);
  }
};