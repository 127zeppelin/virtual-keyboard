export const ChangeLeng = (KEYBOARD_KEYS) => {

  let pressedKeys = new Set();
    
  const changeLanguage = () => {
    for(let i = 0; i < KEYBOARD_KEYS.length; i++){
    if (KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.add('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.remove('current');
      }
    
    } 
  };
  
  document.addEventListener('keydown', (event) => {
    pressedKeys.add(event.code);

    if (pressedKeys.has('ShiftLeft') && pressedKeys.has('AltLeft')) {
      changeLanguage();
    } else if (pressedKeys.has('ShiftRight') && pressedKeys.has('AltRight')){
      changeLanguage();
    }
  });

  document.addEventListener('keyup', (event) => {
    pressedKeys.delete(event.code);
  });
};