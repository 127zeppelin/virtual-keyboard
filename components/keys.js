 const KEYBOARD = document.createElement('div');
KEYBOARD.className = 'container__keyboard keyboard';
export const CONTAINER = document.createElement('div');
CONTAINER.className = 'container';
document.body.appendChild(CONTAINER);
CONTAINER.appendChild(KEYBOARD);


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
  console.log(dataKeys);
  for(let i = 0; dataKeys.length > i; i++){
    const KEY_BTN = document.createElement('button');
    KEY_BTN.className = `keyboard__key ${dataKeys[i].className}`;
    KEYBOARD.appendChild(KEY_BTN);
    const KEY_TEXT = document.createElement('span');
    KEY_BTN.appendChild(KEY_TEXT);
    KEY_TEXT.innerHTML = `${dataKeys[i].eng.lowerCase}`
  }
}



export {main};