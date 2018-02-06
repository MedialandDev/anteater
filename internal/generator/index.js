const jsGenerator = require('./js');
const vueGenerator = require('./vue');

module.exports = (plop) => {
  plop.setGenerator('js', jsGenerator);
  plop.setGenerator('vue component', vueGenerator);
};
