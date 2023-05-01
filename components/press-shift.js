export const ShiftPresPsih = (KEYBOARD_KEYS) => {
  let isShiftPressed = false;
  
  const changeCase = () => {
    for(let i = 0; i < KEYBOARD_KEYS.length; i++){
    if (KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.add('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.remove('current');
      }
    
    } 
  };
 
  
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (!isShiftPressed) {
        changeCase();
      }
      isShiftPressed = true;
    }
  });
  
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftPressed = false;
      changeCase();
    }
  });
};


export const ShiftPresVirtual = (KEYBOARD_KEYS) => {
  const SHIFT_LEFT = document.querySelector('.ShiftLeft');
  const SHIFT_RIGHT = document.querySelector('.ShiftRight');
  const changeCase = () => {
    for(let i = 0; i < KEYBOARD_KEYS.length; i++){
    if (KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.contains('current')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.add('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.remove('current');
      }
    
    } 
  };
  
  SHIFT_LEFT.addEventListener('mousedown', (event) => {
      changeCase();
  });
  
  SHIFT_LEFT.addEventListener('mouseup', (event) => {
      changeCase();
  });
  SHIFT_RIGHT.addEventListener('mousedown', (event) => {
    event.preventDefault();
    SHIFT_RIGHT.focus(); // установка фокуса на элементе
      changeCase();
  });
  
  SHIFT_RIGHT.addEventListener('mouseup', (event) => {
      changeCase();
      SHIFT_RIGHT.blur(); // снятие фокуса с элемент
  });

};