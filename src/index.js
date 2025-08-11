module.exports = function toReadable(number) {
  const unit = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number < 20) {
    return unit[number];
  }

  if (number < 100) {
    const ten = Math.floor(number / 10);
    const units = number % 10;
    return tens[ten] + (units ? ' ' + unit[unit] : '');
  }

  const hundred = Math.floor(number / 100);
  const rest = number % 100;
  const restReadable = rest ? ' ' + toReadable(rest) : '';
  return unit[hundred] + ' hundred' + restReadable;
};
