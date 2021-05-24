export const
  modalDOMen = `
  <div class="modal-body">
    <p class="modal-body-text" id="changeLogin">Change Login</p>
    <input type="text" class="modal-body-text-input" placeholder="Enter new login" id="changeLoginIpt">
    <p class="modal-body-text" id="changePassword">Change Password</p>
    <input type="text" class="modal-body-text-input" placeholder="Enter new password" id="changePasswordIpt">
    <p class="modal-body-text" id="repeatPass">Repeat Password</p>
    <input type="text" class="modal-body-text-input" placeholder="Repeat password" id="changeRepeatIpt">
  </div>
  `,
  modalDOMru = `
  <div class="modal-body">
    <p class="modal-body-text" id="changeLogin">Измените логин</p>
    <input type="text" class="modal-body-text-input" placeholder="Введите новый логин" id="changeLoginIpt">
    <p class="modal-body-text" id="changePassword">Измените пароль</p>
    <input type="text" class="modal-body-text-input" placeholder="Введите новый пароль" id="changePasswordIpt">
    <p class="modal-body-text" id="repeatPass">Повторите пароль</p>
    <input type="text" class="modal-body-text-input" placeholder="Повторите пароль" id="changeRepeatIpt">
  </div>
  `,
  modalTXT = {
    changeLogin: {
      en: 'Change Login',
      ru: 'Измените логин'
    },
    changePassword: {
      en: 'Change Password',
      ru: 'Измените пароль'
    },
    repeatPass: {
      en: 'Repeat Password',
      ru: 'Повторите пароль'
    }
  },
  modalIPT = {
    changeLoginIpt: {
      en: 'Enter new login',
      ru: 'Введите новый логин'
    },
    changePasswordIpt: {
      en: 'Enter new password',
      ru: 'Введите новый пароль'
    },
    changeRepeatIpt: {
      en: 'Repeat password',
      ru: 'Повторите пароль'
    },
  };


export const
  langSelect = `
  <select class="two_navigation_language" id="lang">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>
`;