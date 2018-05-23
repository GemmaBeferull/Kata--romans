const romanNumbers = require('../src/main');


describe("Roman numbers", () => {
    var app = romanNumbers()
   it("convert numbers to roman numerals", () => {
        expect(app.romanNumbers(1)).toBe('I');
        expect(app.romanNumbers(2)).toBe('II');
        expect(app.romanNumbers(4)).toBe('IV');
        expect(app.romanNumbers(16)).toBe('XVI');
   });
  
});