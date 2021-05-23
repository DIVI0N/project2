export default function liveSearch(selector, attribute) {
  const findIpt = document.querySelector(selector);
  findIpt.addEventListener('input', (e) => {
    const elVal = e.target.value.trim();
    const findElems = document.querySelectorAll(`.table__row [data-name=${attribute}]`);

    if (elVal !== '') {
      findElems.forEach(el => {
        const searchTxt = el.innerText.search(elVal);
        if (searchTxt === -1) {
          el.parentElement.classList.add('search-hide');
          el.innerHTML = el.innerText;

        }
        else {
          el.parentElement.classList.remove('search-hide');
          const str = el.innerText;
          el.innerHTML = insertMark(str, searchTxt, elVal.length);
        }
      });
    }
    else {
      findElems.forEach(el => {
        el.parentElement.classList.remove('search-hide');
        el.innerHTML = el.innerText;
      });
    }
  });
}

export function insertMark(str, pos, len) {
  return `${str.slice(0, pos)}<mark>${str.slice(pos, pos + len)}</mark>${str.slice(pos + len)}`;
};

