export const dom = `
  <div class="two__database-container-client" id="createPerson">
    <input type="text" class="two__database-container-client-input" placeholder="Fname*" id="firstName">
    <input type="text" class="two__database-container-client-input" placeholder="Iname*" id="lastName">
    <input type="text" class="two__database-container-client-input" placeholder="Age*" id="age">
    <input type="text" class="two__database-container-client-input" placeholder="City" id="city">
    <input type="text" class="two__database-container-client-input" placeholder="Phone Number" id="phone">
    <input type="text" class="two__database-container-client-input" placeholder="Email*" id="email">
    <input type="text" class="two__database-container-client-input" placeholder="Company Name" id="company">
    <div class="error-person" id='error'>*All fields must be filled</div>
    <button class="two__database-container-client-btn create-btn" id="create">Create</button>
    <button class="two__database-container-client-btn clear-btn" id="clearAll">Clear All</button>
  </div>
  <div id="modalClear" class="modal modal--clear">
  <div class="modal-content modal-content--clear">
    <span class="close" id="exit-btn">&times;</span>
    <h2 class="modal-content__title--clear" id="modaltitles">Are you sure ?</h2>
  <div class="modal-footer">
    <button class="modal-footer-btn create-btn" id="clearAllBtn" type="button">Clear all</button>
    <button class="modal-footer-btn clear-btn" id="exitBtn" type="button">Cancel</button>
  </div>
  </div>
</div>
`,
  messageHelp = {
    invalidLogin: {
      en: 'Login must consist of 4-20 latin characters and numbers',
      ru: 'Логин должен состоять из 4-20 латинcких символов и цифр'
    },
    invalidPass: {
      en: 'Password must consist of 8-14 latin and special characters and numbers',
      ru: 'Пароль должен состоять из 8-14 латинcких и спец символов, и цифр'
    },
    invalidRepeatPass: {
      en: 'Password doesn`t match',
      ru: 'Не совпадает пароль'
    },
    changedData: {
      en: 'Data have been changed',
      ru: 'Данные изменены'
    },
    repeatUser: {
      en: 'This login is already taken',
      ru: 'Этот логин уже занят'
    },
    firstName: {
      en: 'Name must be 1-30 letters long',
      ru: 'Имя должно состоять из 1-30 букв'
    },
    lastName: {
      en: 'Last name must be 1-30 letters long',
      ru: 'Фамилия должна состоять из 1-30 букв'
    },
    age: {
      en: 'Age must be in range 0-150',
      ru: 'Возраст должен быть в пределах 0-150'
    },
    city: {
      en: 'City name must be 1-30 letters long',
      ru: 'Название города должно состоять из 1-30 букв'
    },
    phone: {
      en: 'Phone number must contain + and 10-15 digits',
      ru: 'Номер телефона должен содержать + и 10-15 цифр'
    },
    email: {
      en: 'Invalid email',
      ru: 'Нвалидный email'
    },
    company: {
      en: 'Company name name must be 1-50 letters long',
      ru: 'Название компании должно состоять из 1-50 букв'
    },
  };