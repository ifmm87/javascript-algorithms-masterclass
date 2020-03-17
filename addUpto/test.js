// import addUpTo from './index';
const addUpTo = require('./index');

test('verifying sum value', () => {
  expect(addUpTo(4)).toEqual(10);
})

