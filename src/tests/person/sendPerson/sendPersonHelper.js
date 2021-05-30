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
`;