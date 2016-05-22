import _ from '../../../../../underscore';

function test() {
  return _.map([1, 2, 3], x => x * x);
};

export { test };