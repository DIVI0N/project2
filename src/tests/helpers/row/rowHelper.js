export const data = [{
  id: '123',
  'firstName': 'Alex',
  'lastName': 'Malyk',
  'age': '26',
  'city': 'Kharkiv',
  'phone': '+380988624993',
  'email': 'alex94.malik@gmail.com',
  'company': 'DevEd'
}];

export const dom = '<div class="table table-content"></div>';

export const outHtml = `<div class="table table-content">
      <div class="table__row" data-id="123">
        <div contenteditable="false" data-name="firstName" class="table__row-item table-body col-md" title="Alex">Alex</div>
        <div contenteditable="false" data-name="lastName" class="table__row-item table-body col-md" title="Malyk">Malyk</div>
        <div contenteditable="false" data-name="age" class="table__row-item table-body col-sm" title="26">26</div>
        <div contenteditable="false" data-name="city" class="table__row-item table-body col-md" title="Kharkiv">Kharkiv</div>
        <div contenteditable="false" data-name="phone" class="table__row-item table-body col-lg" title="+380988624993">+380988624993</div>
        <div contenteditable="false" data-name="email" class="table__row-item table-body col-lg" title="alex94.malik@gmail.com">alex94.malik@gmail.com</div>
        <div class="table__row-delete" id="deleteRow" data-id="123">×</div>
        <div contenteditable="false" data-name="company" class="table__row-item table-body col-lg" title="DevEd">DevEd</div>
      </div>
    </div>`;

export const data2 = [{
  id: '123',
  'firstName': 'Alex',
  'lastName': 'Malyk',
  'age': '26',
  'city': '',
  'phone': '',
  'email': 'alex94.malik@gmail.com',
  'company': ''
}];

export const outHtml2 = `<div class="table table-content">
      <div class="table__row" data-id="123">
        <div contenteditable="false" data-name="firstName" class="table__row-item table-body col-md" title="Alex">Alex</div>
        <div contenteditable="false" data-name="lastName" class="table__row-item table-body col-md" title="Malyk">Malyk</div>
        <div contenteditable="false" data-name="age" class="table__row-item table-body col-sm" title="26">26</div>
        <div contenteditable="false" data-name="city" class="table__row-item table-body col-md" title="">-</div>
        <div contenteditable="false" data-name="phone" class="table__row-item table-body col-lg" title="">-</div>
        <div contenteditable="false" data-name="email" class="table__row-item table-body col-lg" title="alex94.malik@gmail.com">alex94.malik@gmail.com</div>
        <div class="table__row-delete" id="deleteRow" data-id="123">×</div>
        <div contenteditable="false" data-name="company" class="table__row-item table-body col-lg" title="">-</div>
      </div>
    </div>`;