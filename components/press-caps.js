const savedCaps = localStorage.getItem('keyboardCaps');
let pressedCaps = (savedCaps === null) ? 'down' : savedCaps;

export const CapsPresPsih = (KEYBOARD_KEYS) => {

  const CAPS_LOCK = document.querySelector('.CapsLock');
  const changeCaseCaps = () => {
    for (let i = 0; i < KEYBOARD_KEYS.length; i++) {
      if (KEYBOARD_KEYS[i].querySelector('span.eng-down').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-down').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.add('current');
      } else if (KEYBOARD_KEYS[i].querySelector('span.ru-down').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-down').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.add('current');
      } else if (KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-down').classList.add('current');
      } else if (KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-down').classList.add('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.remove('current');
      }
    }
    
    pressedCaps = (pressedCaps === 'down') ? 'up' : 'down';
    localStorage.setItem('keyboardCaps', pressedCaps);
    CAPS_LOCK.classList.toggle('active');
  };


  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      changeCaseCaps();
    }
  });

  CAPS_LOCK.addEventListener('mousedown', (event) => {
    changeCaseCaps();
  });
};


export { pressedCaps };