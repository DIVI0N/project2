import { getData, getPerson, support, url, getFetch } from '../..';
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
  if (e.target.classList.contains('table__row-item')) {
    e.target.setAttribute('contenteditable', 'false');
    const blurUrl = `${url.database}/${lsGet('db')}`;
    const dataName = e.target.getAttribute('data-name');
    console.log(dataName);
    // getFetch(blurUrl);
  }
};