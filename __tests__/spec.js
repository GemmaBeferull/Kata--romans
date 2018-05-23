const fs = require('fs');
const pug = require('pug');
const path = require('path');
const chai = require('chai');
const romanNumbers = require('../src/main');
chai.expect();

describe("Roman numbers", () => {
    var app = romanNumbers()
   it("convert numbers to roman numerals", () => {
        expect(app.romanNumbers(1)).toBe('I');
        expect(app.romanNumbers(5)).toBe('IIIII');
   });
  
});