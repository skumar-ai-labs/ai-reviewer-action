import { reviewReadability } from '../src/reviewers/readability';
test('readability returns array', () => {
  expect(Array.isArray(reviewReadability('a.ts', 'content'))).toBe(true);
});
