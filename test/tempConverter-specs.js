const expect = require('chai').expect;

const {convertFtoC, convertCtoF, tempConverter} = require('../tempConverter.js');

describe('temperature converter suit of tests', () => {

  it('is a function', () => {
    expect(tempConverter).to.be.a('function');
  });

  it('returns a number', () => {
    expect(tempConverter(0, 'f')).to.be.a('number');
  })

});

describe('it correctly converts a temperature', () => {

  it('converts a temperature from celcius to farenheit', () => {
    const result = tempConverter(0, 'f');
    expect(result).to.equal(32);
  });

  it('converts a temperature from farenheit to celcius', () => {
    const result = tempConverter(32, 'c');
    expect(result).to.equal(0);
  });
 
});

describe('error handling', () => {
  it('can detect if temperature type has not been entered correctly', () => {
    const result = tempConverter(32, 'g');
    expect(result).to.equal('Please enter a valid temperature type');
  })
})
