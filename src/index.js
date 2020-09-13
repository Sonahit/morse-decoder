const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const MORSE_TABLE_PADDED = Object.keys(MORSE_TABLE).reduce(
  (acc, m) => {
    const word = MORSE_TABLE[m];
    const encode = {
      ".": "10",
      "-": "11",
    };
    let encoded = m
      .split("")
      .map((c) => encode[c])
      .join("");
    while (encoded.length < 10) {
      encoded = `0${encoded}`;
    }
    acc[encoded] = {
      morse: m,
      word,
    };
    return acc;
  },
  { "**********": { morse: " ", word: " " } }
);

/**
 *
 * @param {string} expr
 */
function decode(expr, wordLength = 10) {
  expr = expr.trim();
  let decoded = "";
  for (let length = 0; length < expr.length; length += wordLength) {
    decoded +=
      MORSE_TABLE_PADDED[expr.substring(length, length + wordLength)].word ||
      "";
  }
  return decoded;
}

module.exports = {
  decode,
};
