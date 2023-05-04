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
        if (!key.classList.contains('CapsLock')) {
          key.classList.add('active');
        }

        event.preventDefault();
        if (key.classList.contains('Backspace')) {
          const cursorPos = TEXT_INPUT.selectionStart;
          const textBeforeCursor = TEXT_INPUT.value.slice(0, cursorPos);
          const textAfterCursor = TEXT_INPUT.value.slice(cursorPos);
          const textCute = textBeforeCursor.slice(0, -1);
          const newText = textCute + textAfterCursor;
          TEXT_INPUT.value = newText;
          TEXT_INPUT.selectionStart = cursorPos - 1;
          TEXT_INPUT.selectionEnd = cursorPos - 1;
          TEXT_INPUT.focus();
        } else if (key.classList.contains('Delete')) {
          const cursorPos = TEXT_INPUT.selectionStart;
          const textBeforeCursor = TEXT_INPUT.value.slice(0, cursorPos);
          const textAfterCursor = TEXT_INPUT.value.slice(cursorPos);
          const textCute = textAfterCursor.slice(1);
          const newText = textBeforeCursor + textCute;
          TEXT_INPUT.value = newText;
          TEXT_INPUT.selectionStart = cursorPos;
          TEXT_INPUT.selectionEnd = cursorPos;
          TEXT_INPUT.focus();
        } else if (key.classList.contains('Enter')) {
          TEXT_INPUT.value += '\n'
        } else if (key.classList.contains('AltLeft') || key.classList.contains('AltRight')) {
          TEXT_INPUT.focus();
        } else if (key.classList.contains('ControlLeft') || key.classList.contains('ControlRight')) {
          TEXT_INPUT.focus();
        } else if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
          TEXT_INPUT.focus();
        } else if (key.classList.contains('CapsLock')) {
          TEXT_INPUT.focus();
        } else if (key.classList.contains('Tab')) {
          const cursorPos = TEXT_INPUT.selectionStart;
          const textBeforeCursor = TEXT_INPUT.value.slice(0, cursorPos);
          const textAfterCursor = TEXT_INPUT.value.slice(cursorPos);
          const TAB = '   ';
          const newText = textBeforeCursor + TAB + textAfterCursor;
          TEXT_INPUT.value = newText;
          TEXT_INPUT.selectionStart = cursorPos + 3;
          TEXT_INPUT.selectionEnd = cursorPos + 3;
          TEXT_INPUT.focus();
        } else if (key.classList.contains('MetaLeft')) {
          TEXT_INPUT.focus();
        } else {
          const spanContent = event.currentTarget.querySelector('.current').textContent;
          const cursorPos = TEXT_INPUT.selectionStart;
          const textBeforeCursor = TEXT_INPUT.value.slice(0, cursorPos);
          const textAfterCursor = TEXT_INPUT.value.slice(cursorPos);
          const newText = textBeforeCursor + spanContent + textAfterCursor;
          TEXT_INPUT.value = newText;
          TEXT_INPUT.selectionStart = cursorPos + 1;
          TEXT_INPUT.selectionEnd = cursorPos + 1;
          TEXT_INPUT.focus();
          TEXT_INPUT.focus();
        }
      }
    });

    document.addEventListener('keyup', event => {
      const keyCode = event.code;
      const key = this.virtualKeyboard.querySelector(`.${keyCode}`);
      if (key && !key.classList.contains('CapsLock')) {
        key.classList.remove('active');
      }
    });
  }
}