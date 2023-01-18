function less_hundred(n) {
    a = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven',
        8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
        15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
        30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    }
    return n === 0 || n < 20 || n % 10 === 0 ? b = a[n] : b = `${a[Math.floor(n / 10) * 10]} ${a[n % 10]}`
}

module.exports = function toReadable(number) {
    return number < 100 ? less_hundred(number) : number % 100 === 0 ? `${a[Math.floor(number / 100)]} hundred` : `${a[Math.floor(number / 100)]} hundred ${less_hundred(number % 100)}`
}
/* alternative solution
module.exports = function toReadable(number) {

    a = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven',
        8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
        15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
        30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    }
    if (number > 20 && number % 100 != 0 && number % 100 > 20) {
        b = a[number % 100 - number % 10]
    } else if (number != 0 && number % 100 == 0) {
        b = ''
    } else if (number % 100 <= 20) {
        b = a[number % 100]
    } else {
        b = a[number]
    }

    c = number % 10 != 0 && number % 100 != 0 && number > 20 && (number < 100 || number % 100 > 20) ? a[number % 10] : ''

    return `${number >= 100 ? a[Math.floor(number / 100)] + ' hundred' : ''} ${b} ${c}`.trim()
}
*/
