export default class Keyboard {
  constructor(virtualKeyboard) {
    this.virtualKeyboard = virtualKeyboard;
    this.keys = virtualKeyboard.querySelectorAll('.keyboard__key');
    this.addEventListeners();
  }
  addEventListeners() {
    document.addEventListener('keydown', event => {
      const keyCode = event.code;
      const key = this.virtualKeyboard.querySelector(`.${keyCode}`);
      if (key) {
        console.log(`${keyCode}`);
        key.classList.add('active');
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