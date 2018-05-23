export default function application() {

    const numerals = [
        {value: 1000, numeral: 'M'},
        {value: 900, numeral: 'CM'},
        {value: 500, numeral: 'D'},
        {value: 400, numeral: 'CD'},
        {value: 100, numeral: 'C'},
        {value: 90, numeral: 'XC'},
        {value: 50, numeral: 'L'},
        {value: 40, numeral: 'XL'},
        {value: 10, numeral: 'X'},
        {value: 9, numeral: 'IX'},
        {value: 5, numeral: 'V'},
        {value: 4, numeral: 'IV'},
        {value: 1, numeral: 'I'},
    ]

    let romanNumbers = (number) => {
        let roman = '';
        numerals.forEach((item) => {
            for (;number >= item.value; number -= item.value){
                roman += item.numeral; 
            }
        })
        return roman;
    }

    return {
        romanNumbers
    }
}

   // module.exports = application;
