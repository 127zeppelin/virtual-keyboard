export const ChangeLeng = (KEYBOARD_KEYS) => {
 
  let pressedKeys = new Set();
  let currentLayout = 'eng-';
  const changeLanguage = () => {
    for (let i = 0; i < KEYBOARD_KEYS.length; i++) {
      switch (true) {
        case KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.contains('current'):
          KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.remove('current');
          KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.add('current');
          currentLayout = 'ru-';
          break;
        case KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.contains('current'):
          KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.add('current');
          KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.remove('current');
          currentLayout = 'eng-';
          break;
        case KEYBOARD_KEYS[i].querySelector('span.eng-down').classList.contains('current'):
          KEYBOARD_KEYS[i].querySelector('span.eng-down').classList.remove('current');
          KEYBOARD_KEYS[i].querySelector('span.ru-down').classList.add('current');
          currentLayout = 'ru-';
          break;
        case KEYBOARD_KEYS[i].querySelector('span.ru-down').classList.contains('current'):
          KEYBOARD_KEYS[i].querySelector('span.ru-down').classList.remove('current');
          KEYBOARD_KEYS[i].querySelector('span.eng-down').classList.add('current');
          currentLayout = 'eng-';
          break;
        default:
          break;
      }
    }
    localStorage.setItem('keyboardLayout', currentLayout);
  };
  document.addEventListener('keydown', (event) => {
    pressedKeys.add(event.code);

    if (pressedKeys.has('ShiftLeft') && pressedKeys.has('AltLeft')) {
      changeLanguage();
    } else if (pressedKeys.has('ShiftRight') && pressedKeys.has('AltRight')) {
      changeLanguage();
    }
  });
  document.addEventListener('keyup', (event) => {
    pressedKeys.delete(event.code);
  });
};
