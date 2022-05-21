import Comment from '../modules/comment.js';

const comment = [
  { name: 'sunday', age: '34' },
  { name: 'abu', age: '24' },
  { name: 'stanley', age: '26' },
  { name: 'swarly', age: '54' },
];
test('Comment counter', () => {
  expect(Comment.count(comment)).toBe(4);
});