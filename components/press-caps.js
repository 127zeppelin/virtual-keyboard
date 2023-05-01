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
    }
  });
};


export const CapsPresVirtual = (KEYBOARD_KEYS) => {
  const CAPS_LOCK = document.querySelector('.CapsLock');
  const changeCase = () => {
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

  CAPS_LOCK.addEventListener('mousemove', (event) => {
    CAPS_LOCK.focus();
    console.log('Фокус');
});

  CAPS_LOCK.addEventListener('mousedown', (event) => {
      changeCase();
      CAPS_LOCK.classList.toggle('active');
  });



};