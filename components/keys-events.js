
export default class Keyboard {
  constructor(virtualKeyboard) {
    this.virtualKeyboard = virtualKeyboard;
    this.keys = virtualKeyboard.querySelectorAll('.keyboard__key');
    this.addEventListeners();
  }
  
  addEventListeners() {
    document.addEventListener('keydown', event => {
      const TEXT_INPUT = document.querySelector('.container__text');
      const keyCode = event.code;
      const key = this.virtualKeyboard.querySelector(`.${keyCode}`);
      if (key) {
        const spanContent = key.querySelector('.current').textContent;
        key.classList.add('active');
        if (key.classList.contains('Backspace')) {
          TEXT_INPUT.value = TEXT_INPUT.value.slice(0, -1);
        } else if (key.classList.contains('Delete')) {
          const cursorPos = TEXT_INPUT.selectionStart;
          const textBeforeCursor = TEXT_INPUT.value.slice(0, cursorPos);
          const textAfterCursor = TEXT_INPUT.value.slice(cursorPos, -1);  
          const newText = textBeforeCursor + textAfterCursor;
          TEXT_INPUT.value = newText;
          TEXT_INPUT.selectionStart = cursorPos;
          TEXT_INPUT.selectionEnd = cursorPos;
          TEXT_INPUT.focus();
        } else if (key.classList.contains('Enter')) {
          TEXT_INPUT.value += '\n'
        } else if (key.classList.contains('AltLeft') || key.classList.contains('AltRight')) {
          TEXT_INPUT.value = TEXT_INPUT.value;
        } else if (key.classList.contains('ControlLeft') || key.classList.contains('ControlRight')) {
          TEXT_INPUT.value = TEXT_INPUT.value;
        } else if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
          TEXT_INPUT.value = TEXT_INPUT.value;
        } else {
          TEXT_INPUT.value += spanContent;
        }
      }
      // Проверяем, включен ли Caps Lock
      if (event.getModifierState('CapsLock')) {
        const capsLockKey = this.virtualKeyboard.querySelector('.CapsLock');
        if (capsLockKey) {
          capsLockKey.classList.add('active');
        }
      }
    });
  
    document.addEventListener('keyup', event => {
      const keyCode = event.code;
      const key = this.virtualKeyboard.querySelector(`.${keyCode}`);
      if (key) {
        key.classList.remove('active');
      }
  
      if (event.getModifierState('CapsLock')) {
        const capsLockKey = this.virtualKeyboard.querySelector('.CapsLock');
        if (capsLockKey) {
          capsLockKey.classList.add('active');
        }
      } else {
        const capsLockKey = this.virtualKeyboard.querySelector('.CapsLock');
        if (capsLockKey) {
          capsLockKey.classList.remove('active');
        }
      }
    });
  }
}