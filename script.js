import { CONTAINER } from "./components/keys.js";
import { main } from './components/keys.js';


const TITLE = document.createElement('h1');
TITLE.className = 'container__title';
TITLE.innerHTML = '_RS Virtual keybord';
CONTAINER.insertBefore(TITLE, CONTAINER.firstChild);
const TEXT_AREA = document.createElement('textarea');
TEXT_AREA.className = 'container__text';
TEXT_AREA.setAttribute('rows', '7');
CONTAINER.insertBefore(TEXT_AREA, TITLE.nextSibling);

main();



import Keyboard from './components/keys-events.js';
const virtualKeyboard = document.querySelector('.keyboard');
const keyboard = new Keyboard(virtualKeyboard);

