import { validateFunction } from './validators';

export default function log(target, key, descriptor) {
  const userFunc = descriptor.value;
  validateFunction(userFunc, 'log');

  return {
    ...descriptor,
    value: function logger(...params) {
      // eslint-disable-next-line
      console.log(`Calling function "${key}" `, ...params);
      return userFunc.apply(this, [...params]);
    },
  };
}
