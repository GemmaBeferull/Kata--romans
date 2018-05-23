function application() {

    var numerals = (value, numeral) => {
        return {value, numeral}
    }


    var romanNumbers = (number) => {
        return 'I'.repeat(number);
    }
    return {
        romanNumbers,
        numerals
    }
}

// be able to import the file in node
if (typeof(module) != 'undefined'){
    module.exports = application;
}