import _ from 'underscore';

export function test() {
  return _.map([1, 2, 3], x => x * x);
}
