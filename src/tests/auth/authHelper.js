export const
  authPage = `
  <section class="first">
    <img src="../assets/img/daydream-logo.svg" alt="logo" class="first-img">
    <div class="first__window">
      <h2 class="first__window-title" id="titleAuth">AUTHORIZATION</h2>
      <div class="first__window-slash"></div>
      <div class="first__window-account" id="authBlock">
        <h3 class="first__window-account-login" id="logintxt">Login</h3>
        <input type="text" class="input-login" placeholder="Enter your login..." id="loginIpt">
        <h3 class="first__window-account-password" id="passwordtxt">Password</h3>
        <input type="password" class="input-password" placeholder="Enter your password..." id="passwordIpt">
        <img src="../assets/img/show_hide.svg" alt="hide" class="img-password">
        <br>
        <button class="btn btn--registration" id="login">Log In</button>
        <div class="registration">
          <img src="../assets/img/edit.svg" alt="" class="img-registration">
          <a class="registration-title" href="registration.html" id="toRegister">Register now</a>
        </div>
        <div class="error"></div>
      </div>
    </div>
  </section>
  `,
  registrationPage = `
  <section class="first">
    <img src="../assets/img/daydream-logo.svg" alt="logo" class="first-img">
    <div class="first__window">
      <h2 class="first__window-title" id="titleAuth">REGISTRATION</h2>
      <div class="first__window-slash"></div>
      <div class="first__window-account">
        <h3 class="first__window-account-login" id="logintxt">Login</h3>
        <input type="text" class="input-login" placeholder="Enter your login..." id="loginIpt">
        <h3 class="first__window-account-password" id="passwordtxt">Password</h3>
        <input type="password" class="input-password" placeholder="Enter your password..." id="passwordIpt">
        <img src="../assets/img/show_hide.svg" alt="hide" class="img-password">
        <h3 class="first__window-account-repeat" id="repeatPass">Repeat password</h3>
        <input type="password" class="input-repeat" placeholder="Repeat your password ..." id="repeatPassIpt">
        <img src="../assets/img/show_hide.svg" alt="hide" class="img-password">
        <br>
        <button class="btn btn--registration" id="registration">Registration</button>
        <div class="registration">
          <img src="../assets/img/edit.svg" alt="edit" class="img-registration">
          <a class="registration-title" href="index.html" id="toLogin">To login</a>
        </div>
        <div class="error"></div>
      </div>
    </div>
  </section>
  `;