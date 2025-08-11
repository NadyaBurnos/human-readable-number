module.exports = function toReadable(number) {
  const one = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const ten = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return one[number];
  }

  if (number < 100) {
    const tens = Math.floor(number / 10);
    const unit = number % 10;
    return unit === 0 ? ten[tens] : `${ten[tens]} ${one[unit]}`;
  }

  const hundred = Math.floor(number / 100);
  const rest = number % 100;
  const restStr = rest === 0 ? '' : ` ${toReadable(rest)}`;

  return `${one[hundred]} hundred${restStr}`;
};
