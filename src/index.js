import _ from 'lodash';

export function test() {
  return _.map([1, 2, 3], x => x * x);
};
