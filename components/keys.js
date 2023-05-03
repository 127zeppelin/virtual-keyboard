const KEYBOARD = document.createElement('div');
KEYBOARD.className = 'container__keyboard keyboard';
export const CONTAINER = document.createElement('div');
CONTAINER.className = 'container';
document.body.appendChild(CONTAINER);
CONTAINER.appendChild(KEYBOARD);
import { ChangeLeng } from './change-leng.js';
import { ShiftPresPsih } from './press-shift.js'
import { ShiftPresVirtual } from './press-shift.js'
import { CapsPresPsih } from './press-caps.js'

async function getDataKeys() {
  const url = './components/key-values.json';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const dataKeys = await getDataKeys();
  const savedLayout = localStorage.getItem('keyboardLayout');
  const savedCaps = localStorage.getItem('keyboardCaps');
  const TEXT_INPUT = document.querySelector('.container__text');
  for (let i = 0; dataKeys.length > i; i++) {
    const KEY_BTN = document.createElement('button');
    KEY_BTN.className = `keyboard__key ${dataKeys[i].className}`;
    KEYBOARD.appendChild(KEY_BTN);

    const TEXT_EN_LC = document.createElement('span');
    TEXT_EN_LC.className = 'eng-down';
    KEY_BTN.appendChild(TEXT_EN_LC);
    TEXT_EN_LC.innerHTML = `${dataKeys[i].eng.lowerCase}`;

    const TEXT_EN_UC = document.createElement('span');
    TEXT_EN_UC.className = 'eng-up';
    KEY_BTN.appendChild(TEXT_EN_UC);
    TEXT_EN_UC.innerHTML = `${dataKeys[i].eng.upperCase}`;

    const TEXT_RU_LC = document.createElement('span');
    TEXT_RU_LC.className = 'ru-down';
    KEY_BTN.appendChild(TEXT_RU_LC);
    TEXT_RU_LC.innerHTML = `${dataKeys[i].rus.lowerCase}`;

    const TEXT_RU_UC = document.createElement('span');
    TEXT_RU_UC.className = 'ru-up';
    KEY_BTN.appendChild(TEXT_RU_UC);
    TEXT_RU_UC.innerHTML = `${dataKeys[i].rus.upperCase}`;

    
    if(savedLayout === 'eng-' && savedCaps !== 'up'){
      TEXT_EN_LC.classList.add('current');
    } else  if(savedLayout === 'eng-' && savedCaps === 'up'){
      if(KEY_BTN.classList.contains('caps')){
        TEXT_EN_LC.classList.add('current');
      } else {
        TEXT_EN_UC.classList.add('current');
      }
    } else  if(savedLayout === null && savedCaps === 'up'){
      if(KEY_BTN.classList.contains('caps')){
        TEXT_EN_LC.classList.add('current');
      } else {
        TEXT_EN_UC.classList.add('current');
      }
    }else  if (savedLayout === 'ru-' && savedCaps !== 'up') {
      TEXT_RU_LC.classList.add('current');
    } else  if(savedLayout === 'ru-' && savedCaps === 'up'){
      if(KEY_BTN.classList.contains('caps')){
        TEXT_RU_LC.classList.add('current');
      } else {
        TEXT_RU_UC.classList.add('current');
      }
    } else {
      TEXT_EN_LC.classList.add('current');
    } 
    
    

    KEY_BTN.addEventListener('click', (event) => {
      if (dataKeys[i].className === 'Enter') {
        TEXT_INPUT.value += '\n'
      } else if (dataKeys[i].className === 'Delete caps') {
        const cursorPos = TEXT_INPUT.selectionStart;
        const textBeforeCursor = TEXT_INPUT.value.slice(0, cursorPos);
        const textAfterCursor = TEXT_INPUT.value.slice(cursorPos);
        const textCute = textAfterCursor.slice(1);
        const newText = textBeforeCursor + textCute;
        TEXT_INPUT.value = newText;
        TEXT_INPUT.selectionStart = cursorPos;
        TEXT_INPUT.selectionEnd = cursorPos;
        TEXT_INPUT.focus();
      } else if (dataKeys[i].className === 'Backspace') {
        TEXT_INPUT.value = TEXT_INPUT.value.slice(0, -1);
      } else if (dataKeys[i].className === 'MetaLeft') {
        TEXT_INPUT.focus();
      } else if (dataKeys[i].className === 'ShiftLeft' || dataKeys[i].className === 'ShiftRight') {
        ShiftPresVirtual(KEYBOARD_KEYS);
      } else if (dataKeys[i].className === 'AltLeft' || dataKeys[i].className === 'AltRight') {
        TEXT_INPUT.focus();
      } else if (dataKeys[i].className === 'ControlLeft' || dataKeys[i].className === 'ControlRight') {
        TEXT_INPUT.focus();
      } else if (dataKeys[i].className === 'CapsLock') {
        
      } else if (dataKeys[i].className === 'Tab') {
        TEXT_INPUT.focus();
      } else {
        const spanContent = event.currentTarget.querySelector('.current').textContent;
        TEXT_INPUT.value += spanContent;
        TEXT_INPUT.focus();
      }
    });
  }
  const CAPS_LOCK = document.querySelector('.CapsLock');
  if(savedCaps === 'up'){
    CAPS_LOCK.classList.add('active');
  }
  const KEYBOARD_KEYS = document.querySelectorAll('button.keyboard__key');
  
  ChangeLeng(KEYBOARD_KEYS);
  ShiftPresPsih(KEYBOARD_KEYS);
  CapsPresPsih(KEYBOARD_KEYS);
}


export { main };