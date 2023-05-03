import { CONTAINER } from "./components/keys.js";
import { main } from './components/keys.js';
import { ChangeLeng } from './components/change-leng.js';

const TITLE = document.createElement('h1');
TITLE.className = 'container__title';
TITLE.innerHTML = '_RS Virtual Keyboard';
CONTAINER.insertBefore(TITLE, CONTAINER.firstChild);
const TEXT_AREA = document.createElement('textarea');
TEXT_AREA.className = 'container__text';
TEXT_AREA.setAttribute('rows', '7');
CONTAINER.insertBefore(TEXT_AREA, TITLE.nextSibling);

const KEYBOARD_KEYS = document.querySelectorAll('button.keyboard__key');
/*window.addEventListener('load', () => {
  const savedLayout = localStorage.getItem('keyboardLayout');
  console.log(savedLayout);
  if (savedLayout === 'ru-up') {
    console.log('Условие 1')
    ChangeLeng(KEYBOARD_KEYS);
  } else if (savedLayout === 'ru-doun') {
    console.log('Условие 2')
    ChangeLeng(KEYBOARD_KEYS);
  } else if (savedLayout === 'eng-up') {
    console.log('Условие 3')
    ChangeLeng(KEYBOARD_KEYS);
  } else if (savedLayout === 'eng-doun') {
    console.log('Условие 4')
    ///Всё класно 
  }
});

*/
await main();






import Keyboard from './components/keys-events.js';
const VIRTUAL_KEYBORD = document.querySelector('.keyboard');
// eslint-disable-next-line no-unused-vars
const keyboard = new Keyboard(VIRTUAL_KEYBORD);


const TEXT = document.createElement('p');
TEXT.className = 'container__article';
TEXT.innerHTML = 'The keyboard was created in the Windows operating system. <br/> To switch the language combination: left Shift + alt';
CONTAINER.insertBefore(TEXT, VIRTUAL_KEYBORD.nextSibling);