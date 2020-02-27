module.exports = function toReadable(numbers) {
    let number = String(numbers);
    let result = '';
    const figures = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbers20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimalNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number.length == 1) return figures[number];

    if (number.length == 2) {
        if (number[0] == 1) return result = numbers20[number[1]];
        if (number[1] == 0) return result = decimalNumbers[number[0]];
        return result = `${decimalNumbers[number[0]]} ${figures[number[1]]}`;
    }

    if (String(number).length == 3) {

        if (number % 100 == 0) {
            return result = `${figures[number[0]]} hundred`;
        }
        if (String(number)[1] == 0) {
            return result = `${figures[number[0]]} hundred ${figures[number[2]]}`;
        };

        if (String(number)[1] == 1) {
            return result = `${figures[number[0]]} hundred ${numbers20[number[2]]}`;
        };
        if (String(number)[2] == 0) {
            return result = `${figures[number[0]]} hundred ${decimalNumbers[number[1]]}`;
        } else {
            return result = `${figures[number[0]]} hundred ${decimalNumbers[number[1]]} ${figures[number[2]]}`;
        }


    }
    return result;
}
