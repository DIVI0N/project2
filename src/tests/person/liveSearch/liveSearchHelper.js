export const
  dom = `
  <section class="two">
    <div class="container">
      <nav class="two__navigation">
        <div class="two__navigation-logo">
          <img src="../assets/img/daydream-logo.svg" alt="logo" class="logo-img">
        </div>
        <select class="two__navigation-language" id="lang">
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
        <select class="two__navigation-theme" id="theme" name="theme">
          <option id="themeLight" value="light">Light</option>
          <option id="themeDark" value="dark">Dark</option>
        </select>
        <div class="two__navigation-setting">
          <a class="two__navigation-setting-link" href="#" id="myBtn"></a>
        </div>
        <div class="two__navigation-exit">
          <a class="two__navigation-exit-link" href="index.html" id="exit">
          </a>
        </div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <span class="close">&times;</span>
              <h2 class="model-header-title" id="settingTitle">SETTINGS</h2>
            </div>
            <div class="modal-body">
              <div class="validation-block">
                <label class="modal-body-text" id="changeLogin">Change Login</label>
                <input type="text" class="modal-body-text-input" placeholder="Enter new login" id="changeLoginIpt">
              </div>

              <div class="validation-block">
                <label class="modal-body-text" id="changePassword">Change Password</label>
                <input type="password" class="modal-body-text-input" placeholder="Enter new password"
                  id="changePasswordIpt">
                <img src="../assets/img/show_hide.svg" alt="hide" class="img-password">
              </div>
              <div class="validation-block">
                <label class="modal-body-text" id="repeatPass">Repeat Password</label>
                <input type="password" class="modal-body-text-input" placeholder="Repeat password" id="changeRepeatIpt">
                <img src="../assets/img/show_hide.svg" alt="hide" class="img-password">
              </div>
              <div class="error-block">
                <div class="error"></div>
              </div>
            </div>

            <div class="modal-footer">
              <button class="modal-footer-btn create-btn" id="change">Change</button>
              <button class="modal-footer-btn clear-btn" id="cancel">Cancel</button>
            </div>
          </div>

        </div>
      </nav>
      <div class="two__line"></div>
      <div class="two__database">
        <div class="two__database-container">
          <p class="two__database-container-title" id="dbTitle">Database</p>
          <select class="two__database-container-dropdown" id="dbSelect">
            <option value="mysql">MySQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="sqlite">SQLite</option>
            <option value="mongodb">MongoDB</option>
            <option value="redis">Redis</option>
            <option value="cassandra">Cassandra</option>
            <option value="graphdb">GraphDB</option>
          </select>
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
        </div>
        <div class="two__database-search">
          <img class="input__find-img-fname" src="../assets/img/lupa.svg" alt="loupe">
          <input class="input__find" type="text" placeholder="Find by fname..." id="findName">
          <img class="input__find-img-lname" src="../assets/img/lupa.svg" alt="loupe">
          <input type="text" class="input__find" placeholder="Find by lname..." id="findLname">
          <div class="two__database-search-page">
            <div class="two__database-search-page-container">
              <div class="table" id="mainTable">
                <div class="table__row table-head">
                  <div class="table__row-item head-item col-md" data-txt="firstName"><span class="head-item__title"
                      id="fnameSpn">FName</span>
                  </div>
                  <div class="table__row-item head-item col-md" data-txt="lastName"><span class="head-item__title"
                      id="lnameSpn">LName</span>
                  </div>
                  <div class="table__row-item head-item col-sm" data-txt="age"><span class="head-item__title"
                      id="ageSpn">Age</span></div>
                  <div class="table__row-item head-item col-md" data-txt="city"><span class="head-item__title"
                      id="citySpn">City</span></div>
                  <div class="table__row-item head-item col-lg" data-txt="phone"><span class="head-item__title"
                      id="phoneSpn">Phone
                      number</span></div>
                  <div class="table__row-item head-item col-lg" data-txt="email"><span class="head-item__title"
                      id="emailSpn">Email</span>
                  </div>
                  <div class="table__row-item head-item col-lg" data-txt="company"><span class="head-item__title"
                      id="companySpn">Company
                      name</span></div>
                </div>
                <div class="table table-content">
                  <div class="table__row  data-id="123">
                    <div contenteditable="false" data-name="firstName" class="table__row-item table-body col-md" title="Alex">Alex</div>
                    <div contenteditable="false" data-name="lastName" class="table__row-item table-body col-md" title="Malik">Malik</div>
                    <div contenteditable="false" data-name="age" class="table__row-item table-body col-sm" title="26">26</div>
                    <div contenteditable="false" data-name="city" class="table__row-item table-body col-md" title="Kharkiv">Kharkiv</div>
                    <div contenteditable="false" data-name="phone" class="table__row-item table-body col-lg" title="+123123123123">+123123123123</div>
                    <div contenteditable="false" data-name="email" class="table__row-item table-body col-lg" title="$post@example.com">$post@example.com</div>
                    <div class="table__row-delete" id="deleteRow" data-id="123">&times;</div>
                    <div contenteditable="false" data-name="company" class="table__row-item table-body col-lg" title="New Company">New Company</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;