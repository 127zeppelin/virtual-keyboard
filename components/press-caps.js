export const CapsPresPsih = (KEYBOARD_KEYS) => {
  
  const changeCaseCaps = () => {
    for(let i = 0; i < KEYBOARD_KEYS.length; i++){
    if (KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.eng-up').classList.remove('current');
        KEYBOARD_KEYS[i].querySelector('span.eng-doun').classList.add('current');
      } else if  (KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.contains('current') && !KEYBOARD_KEYS[i].classList.contains('caps')) {
        KEYBOARD_KEYS[i].querySelector('span.ru-doun').classList.add('current');
        KEYBOARD_KEYS[i].querySelector('span.ru-up').classList.remove('current');
      }
    
    } 
  };
 
  
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
        changeCaseCaps();
        console.log("Клавиша нажата")
      
    }
  });
};

/*
export const CapsPresVirtual = (KEYBOARD_KEYS) => {
  const SHIFT_LEFT = document.querySelector('.ShiftLeft');
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
    event.preventDefault();
    SHIFT_LEFT.focus(); // установка фокуса на элементе
      changeCase();
  });
  
  SHIFT_LEFT.addEventListener('mouseup', (event) => {
      changeCase();
      SHIFT_LEFT.blur(); // снятие фокуса с элемент
  });

};*/