import { CONTAINER, main } from './components/keys.js';
import Keyboard from './components/keys-events.js';

const TITLE = document.createElement('h1');
TITLE.className = 'container__title';
TITLE.innerHTML = '_RS Virtual Keyboard';
CONTAINER.insertBefore(TITLE, CONTAINER.firstChild);
const TEXT_AREA = document.createElement('textarea');
TEXT_AREA.className = 'container__text';
TEXT_AREA.setAttribute('rows', '7');
CONTAINER.insertBefore(TEXT_AREA, TITLE.nextSibling);
await main();
const VIRTUAL_KEYBORD = document.querySelector('.keyboard');
// eslint-disable-next-line no-unused-vars
const keyboard = new Keyboard(VIRTUAL_KEYBORD);
const TEXT = document.createElement('p');
TEXT.className = 'container__article';
TEXT.innerHTML = 'The keyboard was created in the Windows operating system. <br/> To switch the language combination: left Shift + alt';
CONTAINER.insertBefore(TEXT, VIRTUAL_KEYBORD.nextSibling);
