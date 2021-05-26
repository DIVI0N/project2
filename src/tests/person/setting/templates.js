export const closmodalTemplate = `
<button class="trigger"></button>
<div class="elem"></div>
`;

export const modal = `
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
`;