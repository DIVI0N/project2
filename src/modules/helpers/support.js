export const support = {
  lsSet: (name, value) => localStorage.setItem(name, value),
  lsGet: (name) => localStorage.getItem(name),
  qs: (selector) => document.querySelector(selector)
};