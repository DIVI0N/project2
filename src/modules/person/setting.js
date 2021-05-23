import { support } from '..';

export default function setting() {
  const { qs } = support;
  const modal = qs('#myModal');
  const btn = qs('#myBtn');
  const span = qs('.close');
  const cancel = qs('#cancel');


  closeModal(btn, modal, 'block');
  closeModal(span, modal);
  closeModal(cancel, modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

function closeModal(trigger, elem, display = 'none') {
  trigger.addEventListener('click', () => {
    elem.style.display = display;
  });
}

