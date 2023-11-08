// FILEPATH: /Users/gazdagbalazs/Desktop/Programming/exam-questions/index.test.js
const { number } = require('yargs');
const {sumUpOdds,createArrayOfNumbers,countCharacters} = require('./index');


describe('createArrayOfNumbers', () => {
    test('should return an array of numbers from start to end when start is less than end', () => {
        const result = createArrayOfNumbers(1, 5);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('should return an array of numbers from start to end when start is greater than end', () => {
        const result = createArrayOfNumbers(5, 1);
        expect(result).toEqual([5, 4, 3, 2, 1]);
    });

    test('should return an empty array when start is equal to end', () => {
        const result = createArrayOfNumbers(5, 5);
        expect(result).toEqual([]);
    });

    test('should return an array', () => {
        const result = createArrayOfNumbers(1,10);
        expect(Array.isArray(result)).toBe(true)
    });
});

describe('sumUpOdds',()=>{
    test('Should return 25 if the array is 1-10',()=>{
        const result = sumUpOdds(createArrayOfNumbers(1,10));
        expect(result).toEqual(25)
    })

    test('Should return 250000 if the array is 1-1000',()=>{
        const result = sumUpOdds(createArrayOfNumbers(1,1000));
        expect(result).toEqual(250000)
    })

    test('Should return 28 if the array is [1,5,10,5,7,8,9,1]',()=>{
        const result = sumUpOdds([1,5,10,5,7,8,9,1]);
        expect(result).toEqual(28)
    })

    test('Should return -28 if the array is [-1,-5,-10,-5,-7,-8,-9,-1]',()=>{
        const result = sumUpOdds([-1,-5,-10,-5,-7,-8,-9,-1]);
        expect(result).toEqual(-28)
    }) 
})

describe('countCharacters', () => { 
    test('should return 4 if the string is "jest"', () => { 
        const result = countCharacters("jest");
        expect(result).toEqual(4);
     })

     test('space characters should be counted "     " = 5', ()=>{
        const result = countCharacters("     ");
        expect(result).toBe(5)
     })

     test('should return a number', () => { 
        const result = countCharacters("dikk")
        expect(typeof result).toBe("number")
      })
 })

