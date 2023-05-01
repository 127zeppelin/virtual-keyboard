const KEY_VALUES = [
  {
    className: "Backquote",
    eng: {
      capsLock: "`",
      lowerCase: "`",
      upperCase: "~",
      shiftCaps: "~"
    },
    rus: {
      capsLock: "Ё",
      lowerCase: "ё",
      upperCase: "Ё",
      shiftCaps: "Ё"
    }
  },
  {
    className: "Digit1",
    eng: {
      capsLock: "1",
      lowerCase: "1",
      upperCase: "!",
      shiftCaps: "!"
    },
    rus: {
      capsLock: "1",
      lowerCase: "1",
      upperCase: "!",
      shiftCaps: "!"
    }
  },
  {
    className: "Digit2",
    eng: {
      capsLock: "2",
      lowerCase: "2",
      upperCase: "@",
      shiftCaps: "@"
    },
    rus: {
      capsLock: "2",
      lowerCase: "2",
      upperCase: "\"",
      shiftCaps: "\""
    }
  },
  {
    className: "Digit3",
    eng: {
      capsLock: "3",
      lowerCase: "3",
      upperCase: "#",
      shiftCaps: "#"
    },
    rus: {
      capsLock: "3",
      lowerCase: "3",
      upperCase: "№",
      shiftCaps: "№"
    }
  },
  {
    className: "Digit4",
    eng: {
      capsLock: "4",
      lowerCase: "4",
      upperCase: "$",
      shiftCaps: "$"
    },
    rus: {
      capsLock: "4",
      lowerCase: "4",
      upperCase: ";",
      shiftCaps: ";"
    }
  },
  {
    className: "Digit5",
    eng: {
      capsLock: "5",
      lowerCase: "5",
      upperCase: "%",
      shiftCaps: "%"
    },
    rus: {
      capsLock: "5",
      lowerCase: "5",
      upperCase: "%",
      shiftCaps: "%"
    }
  },
  {
    className: "Digit6",
    eng: {
      capsLock: "6",
      lowerCase: "6",
      upperCase: "^",
      shiftCaps: "^"
    },
    rus: {
      capsLock: "6",
      lowerCase: "6",
      upperCase: ":",
      shiftCaps: ":"
    }
  },
  {
    className: "Digit7",
    eng: {
      capsLock: "7",
      lowerCase: "7",
      upperCase: "&",
      shiftCaps: "&"
    },
    rus: {
      capsLock: "7",
      lowerCase: "7",
      upperCase: "?",
      shiftCaps: "?"
    }
  },
  {
    className: "Digit8",
    eng: {
      capsLock: "8",
      lowerCase: "8",
      upperCase: "*",
      shiftCaps: "*"
    },
    rus: {
      capsLock: "8",
      lowerCase: "8",
      upperCase: "*",
      shiftCaps: "*"
    }
  },
  {
    className: "Digit9",
    eng: {
      capsLock: "9",
      lowerCase: "9",
      upperCase: "(",
      shiftCaps: "("
    },
    rus: {
      capsLock: "9",
      lowerCase: "9",
      upperCase: "(",
      shiftCaps: "("
    }
  },
  {
    className: "Digit0",
    eng: {
      capsLock: "0",
      lowerCase: "0",
      upperCase: ")",
      shiftCaps: ")"
    },
    rus: {
      capsLock: "0",
      lowerCase: "0",
      upperCase: ")",
      shiftCaps: ")"
    }
  },
  {
    className: "Minus",
    eng: {
      capsLock: "-",
      lowerCase: "-",
      upperCase: "_",
      shiftCaps: "_"
    },
    rus: {
      capsLock: "-",
      lowerCase: "-",
      upperCase: "_",
      shiftCaps: "_"
    }
  },
  {
    className: "Equal",
    eng: {
      capsLock: "=",
      lowerCase: "=",
      upperCase: "+",
      shiftCaps: "+"
    },
    rus: {
      capsLock: "=",
      lowerCase: "=",
      upperCase: "+",
      shiftCaps: "+"
    }
  },
  {
    className: "Backspace",
    eng: {
      lowerCase: "Backspace",
      upperCase: "Backspace"
    },
    rus: {
      lowerCase: "Backspace",
      upperCase: "Backspace"
    }
  },
  {
    className: "Tab",
    eng: {
      lowerCase: "Tab",
      upperCase: "Tab"
    },
    rus: {
      lowerCase: "Tab",
      upperCase: "Tab"
    }
  },
  {
    className: "KeyQ",
    eng: {
      lowerCase: "q",
      upperCase: "Q"
    },
    rus: {
      lowerCase: "й",
      upperCase: "Й"
    }
  },
  {
    className: "KeyW",
    eng: {
      lowerCase: "w",
      upperCase: "W"
    },
    rus: {
      lowerCase: "ц",
      upperCase: "Ц"
    }
  },
  {
    className: "KeyE",
    eng: {
      lowerCase: "e",
      upperCase: "E"
    },
    rus: {
      lowerCase: "у",
      upperCase: "У"
    }
  },
  {
    className: "KeyR",
    eng: {
      lowerCase: "r",
      upperCase: "R"
    },
    rus: {
      lowerCase: "к",
      upperCase: "К"
    }
  },
  {
    className: "KeyT",
    eng: {
      lowerCase: "t",
      upperCase: "T"
    },
    rus: {
      lowerCase: "е",
      upperCase: "Е"
    }
  },
  {
    className: "KeyY",
    eng: {
      lowerCase: "y",
      upperCase: "Y"
    },
    rus: {
      lowerCase: "н",
      upperCase: "Н"
    }
  },
  {
    className: "KeyU",
    eng: {
      lowerCase: "u",
      upperCase: "U"
    },
    rus: {
      lowerCase: "г",
      upperCase: "Г"
    }
  },
  {
    className: "KeyI",
    eng: {
      lowerCase: "i",
      upperCase: "I"
    },
    rus: {
      lowerCase: "ш",
      upperCase: "Ш"
    }
  },
  {
    className: "KeyO",
    eng: {
      lowerCase: "o",
      upperCase: "O"
    },
    rus: {
      lowerCase: "щ",
      upperCase: "Щ"
    }
  },
  {
    className: "KeyP",
    eng: {
      lowerCase: "p",
      upperCase: "P"
    },
    rus: {
      lowerCase: "з",
      upperCase: "З"
    }
  },
  {
    className: "BracketLeft",
    eng: {
      capsLock: "[",
      lowerCase: "[",
      upperCase: "{",
      shiftCaps: "{"
    },
    rus: {
      capsLock: "Х",
      lowerCase: "х",
      upperCase: "Х",
      shiftCaps: "х"
    }
  },
  {
    className: "BracketRight",
    eng: {
      capsLock: "]",
      lowerCase: "]",
      upperCase: "}",
      shiftCaps: "}"
    },
    rus: {
      capsLock: "Ъ",
      lowerCase: "ъ",
      upperCase: "Ъ",
      shiftCaps: "ъ"
    }
  },
  {
    className: "Backslash",
    eng: {
      capsLock: "\\",
      lowerCase: "\\",
      upperCase: "|",
      shiftCaps: "|"
    },
    rus: {
      capsLock: "\\",
      lowerCase: "\\",
      upperCase: "/",
      shiftCaps: "/"
    }
  },
  {
    className: "Delete",
    eng: {
      lowerCase: "Del",
      upperCase: "Del"
    },
    rus: {
      lowerCase: "Del",
      upperCase: "Del"
    }
  },
  {
    className: capsLock,
    eng: {
      lowerCase: capsLock,
      upperCase: capsLock
    },
    rus: {
      lowerCase: capsLock,
      upperCase: capsLock
    }
  },
  {
    className: "KeyA",
    eng: {
      lowerCase: "a",
      upperCase: "A"
    },
    rus: {
      lowerCase: "ф",
      upperCase: "Ф"
    }
  },
  {
    className: "KeyS",
    eng: {
      lowerCase: "s",
      upperCase: "S"
    },
    rus: {
      lowerCase: "ы",
      upperCase: "Ы"
    }
  },
  {
    className: "KeyD",
    eng: {
      lowerCase: "d",
      upperCase: "D"
    },
    rus: {
      lowerCase: "в",
      upperCase: "В"
    }
  },
  {
    className: "KeyF",
    eng: {
      lowerCase: "f",
      upperCase: "F"
    },
    rus: {
      lowerCase: "а",
      upperCase: "А"
    }
  },
  {
    className: "KeyG",
    eng: {
      lowerCase: "g",
      upperCase: "G"
    },
    rus: {
      lowerCase: "п",
      upperCase: "П"
    }
  },
  {
    className: "KeyH",
    eng: {
      lowerCase: "h",
      upperCase: "H"
    },
    rus: {
      lowerCase: "р",
      upperCase: "Р"
    }
  },
  {
    className: "KeyJ",
    eng: {
      lowerCase: "j",
      upperCase: "J"
    },
    rus: {
      lowerCase: "о",
      upperCase: "О"
    }
  },
  {
    className: "KeyK",
    eng: {
      lowerCase: "k",
      upperCase: "K"
    },
    rus: {
      lowerCase: "л",
      upperCase: "Л"
    }
  },
  {
    className: "KeyL",
    eng: {
      lowerCase: "l",
      upperCase: "L"
    },
    rus: {
      lowerCase: "д",
      upperCase: "Д"
    }
  },
  {
    className: "Semicolon",
    eng: {
      capsLock: ";",
      lowerCase: ";",
      upperCase: ":",
      shiftCaps: ":"
    },
    rus: {
      capsLock: "Ж",
      lowerCase: "ж",
      upperCase: "Ж",
      shiftCaps: "ж"
    }
  },
  {
    className: "Quote",
    eng: {
      capsLock: "'",
      lowerCase: "'",
      upperCase: "\"",
      shiftCaps: "\""
    },
    rus: {
      capsLock: "Э",
      lowerCase: "э",
      upperCase: "Э",
      shiftCaps: "э"
    }
  },
  {
    className: "Enter",
    eng: {
      lowerCase: "Enter",
      upperCase: "Enter"
    },
    rus: {
      lowerCase: "Enter",
      upperCase: "Enter"
    }
  },
  {
    className: "ShiftLeft",
    eng: {
      lowerCase: "Shift",
      upperCase: "Shift"
    },
    rus: {
      lowerCase: "Shift",
      upperCase: "Shift"
    }
  },
  {
    className: "KeyZ",
    eng: {
      lowerCase: "z",
      upperCase: "Z"
    },
    rus: {
      lowerCase: "я",
      upperCase: "Я"
    }
  },
  {
    className: "KeyX",
    eng: {
      lowerCase: "x",
      upperCase: "X"
    },
    rus: {
      lowerCase: "ч",
      upperCase: "Ч"
    }
  },
  {
    className: "KeyC",
    eng: {
      lowerCase: "c",
      upperCase: "C"
    },
    rus: {
      lowerCase: "с",
      upperCase: "С"
    }
  },
  {
    className: "KeyV",
    eng: {
      lowerCase: "v",
      upperCase: "V"
    },
    rus: {
      lowerCase: "м",
      upperCase: "М"
    }
  },
  {
    className: "KeyB",
    eng: {
      lowerCase: "b",
      upperCase: "B"
    },
    rus: {
      lowerCase: "и",
      upperCase: "И"
    }
  },
  {
    className: "KeyN",
    eng: {
      lowerCase: "n",
      upperCase: "N"
    },
    rus: {
      lowerCase: "т",
      upperCase: "Т"
    }
  },
  {
    className: "KeyM",
    eng: {
      lowerCase: "m",
      upperCase: "M"
    },
    rus: {
      lowerCase: "ь",
      upperCase: "Ь"
    }
  },
  {
    className: "Comma",
    eng: {
      capsLock: ",",
      lowerCase: ",",
      upperCase: "<",
      shiftCaps: "<"
    },
    rus: {
      capsLock: "Б",
      lowerCase: "б",
      upperCase: "Б",
      shiftCaps: "б"
    }
  },
  {
    className: "Period",
    eng: {
      capsLock: ".",
      lowerCase: ".",
      upperCase: ">",
      shiftCaps: ">"
    },
    rus: {
      capsLock: "Ю",
      lowerCase: "ю",
      upperCase: "Ю",
      shiftCaps: "ю"
    }
  },
  {
    className: "Slash",
    eng: {
      capsLock: "/",
      lowerCase: "/",
      upperCase: "?",
      shiftCaps: "?"
    },
    rus: {
      capsLock: ".",
      lowerCase: ".",
      upperCase: ",",
      shiftCaps: ","
    }
  },
  {
    className: "ArrowUp",
    eng: {
      lowerCase: "▲",
      upperCase: "▲"
    },
    rus: {
      lowerCase: "▲",
      upperCase: "▲"
    }
  },
  {
    className: "ShiftRight",
    eng: {
      lowerCase: "Shift",
      upperCase: "Shift"
    },
    rus: {
      lowerCase: "Shift",
      upperCase: "Shift"
    }
  },
  {
    className: "ControlLeft",
    eng: {
      lowerCase: "Ctrl",
      upperCase: "Ctrl"
    },
    rus: {
      lowerCase: "Ctrl",
      upperCase: "Ctrl"
    }
  },
  {
    className: "MetaLeft",
    eng: {
      lowerCase: "Win",
      upperCase: "Win"
    },
    rus: {
      lowerCase: "Win",
      upperCase: "Win"
    }
  },
  {
    className: "AltLeft",
    eng: {
      lowerCase: "Alt",
      upperCase: "Alt"
    },
    rus: {
      lowerCase: "Alt",
      upperCase: "Alt"
    }
  },
  {
    className: "Space",
    eng: {
      lowerCase: " ",
      upperCase: " "
    },
    rus: {
      lowerCase: " ",
      upperCase: " "
    }
  },
  {
    className: "AltRight",
    eng: {
      lowerCase: "Alt",
      upperCase: "Alt"
    },
    rus: {
      lowerCase: "Alt",
      upperCase: "Alt"
    }
  },
  {
    className: "ArrowLeft",
    eng: {
      lowerCase: "◄",
      upperCase: "◄"
    },
    rus: {
      lowerCase: "◄",
      upperCase: "◄"
    }
  },
  {
    className: "ArrowDown",
    eng: {
      lowerCase: "▼",
      upperCase: "▼"
    },
    rus: {
      lowerCase: "▼",
      upperCase: "▼"
    }
  },
  {
    className: "ArrowRight",
    eng: {
      lowerCase: "►",
      upperCase: "►"
    },
    rus: {
      lowerCase: "►",
      upperCase: "►"
    }
  },
  {
    className: "ControlRight",
    eng: {
      lowerCase: "Ctrl",
      upperCase: "Ctrl"
    },
    rus: {
      lowerCase: "Ctrl",
      upperCase: "Ctrl"
    }
  }
]