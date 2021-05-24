import { support } from '..';

export const personPage = document.getElementById('person-page');
console.log(personPage);
export const authPage = document.getElementById('auth-page');


export default function theme(id) {
  const { lsGet, lsSet, qs } = support;
  const select = qs('#theme');
  const theme = lsGet('theme') ?? lsSet('theme', select.value);
  select.value = theme;

  const changeThemePersonPage = () => {
    let item = qs('body');
    let item2 = qs('.two__navigation');
    let item3 = qs('.two__navigation-language');
    let item4 = qs('.two__navigation-theme');
    let item5 = qs('.two__database-container-title');
    let item6 = qs('.two__database-container-dropdown');
    let item7 = qs('.two__database-container-client');
    let item8 = document.querySelectorAll('.input__find');
    let item9 = qs('.two__database-search-page');
    let item15 = qs('.two__navigation-exit');
    if (lsGet('theme') === 'dark') {
      item.classList.add('body--dark');
      item2.classList.add('two__navigation--dark');
      item3.classList.add('two__navigation-language--dark');
      item4.classList.add('two__navigation-theme--dark');
      item5.classList.add('two__database-container-title--dark');
      item6.classList.add('two__database-container-dropdown--dark');
      item7.classList.add('two__database-container-client--dark');
      item8[0].classList.add('input__find--dark');
      item8[1].classList.add('input__find--dark');
      item9.classList.add('two__database-search-page--dark');
      item15.classList.add('two__navigation-exit--dark');
    } else {
      item.classList.remove('body--dark');
      item2.classList.remove('two__navigation--dark');
      item3.classList.remove('two__navigation_language--dark');
      item4.classList.remove('two__navigation-theme--dark');
      item5.classList.remove('two__database-container-title--dark');
      item6.classList.remove('two__database-container-dropdown--dark');
      item7.classList.remove('two__database-container-client--dark');
      item8[0].classList.remove('input__find--dark');
      item8[1].classList.remove('input__find--dark');
      item9.classList.remove('two__database-search-page--dark');
      item15.classList.remove('two__navigation-exit--dark');
    }
  };

  const changeThemeAuthPage = () => {
    let item10 = document.querySelectorAll('.first');
    let item11 = qs('.first__window');
    let item12 = qs('.first__window--dark-account-login');
    let item13 = qs('.first__window--dark-account-login-password');
    let item14 = qs('.registration-title');
    if (lsGet('theme') === 'dark') {
      item10[0].classList.add('first--dark');
      item10[1].classList.add('first--dark');
      item11.classList.add('first__window--dark');
      item12.classList.add('first__window--dark-account-login--dark');
      item13.classList.add('first__window--dark-account-login-password--dark');
      item14.classList.add('registration-title--dark');
    } else {
      // auth
      item10[0].classList.remove('first--dark');
      item10[1].classList.remove('first--dark');
      item11.classList.remove('first__window--dark');
      item12.classList.remove('first__window--dark-account-login--dark');
      item13.classList.remove(
        'first__window--dark-account-login-password--dark'
      );
      item14.classList.remove('registration-title--dark');
    }
  };

  select.addEventListener('change', (e) => {
    lsSet('theme', e.target.value);
    changeThemePersonPage();
    changeThemeAuthPage();
  });
}
