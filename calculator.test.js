// AAA Pattern

const cal = require('./calculator');

describe('add Operator', () =>{ // Arrange

    test('adds 1 + 1 equals 2', () =>{ // Arrange
        var value = cal.add(1,1); // Act
        expect(value).toBe(2); // Assert
    });
    
    test('adds 5 + 2 equals 7', () =>{
        var value = cal.add(5,2);
        expect(value).toBe(7);
    });
});

describe('subtraction Operator', () =>{
    
    test('subtracts 2 - 1 equals 1', () =>{
        var value = cal.subtract(2,1);
        expect(value).toBe(1);
    });
    
    test('adds 5 - 2 equals 3', () =>{
        var value = cal.subtract(5,2);
        expect(value).toBe(3);
    });
});

describe('multiplication Operator', () =>{
    
    test('multiply 2 * 1 equals 2', () =>{
        var value = cal.mult(2,1);
        expect(value).toBe(2);
    });
    
    test('multiply 5 * 2 equals 10', () =>{
        var value = cal.mult(5,2);
        expect(value).toBe(10);
    });
});
