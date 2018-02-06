const path = require('path');
const { componentExists } = require('../util');

const componentPath = path.resolve('src');
module.exports = {
  description: 'add Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called',
      default: 'Button',
      validate(value) {
        if (!/^[A-Za-z][A-Za-z0-9]+$/.test(value)) return 'Invalidte component name!';
        return componentExists(value) ? 'Component name already exists!' : true;
      },
    },
  ],
  actions: ({ name, type }) => {
    const actions = [
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/vue/{{properCase name}}.vue`,
        templateFile: 'vue/vue.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/vue/index.js`,
        templateFile: 'vue/index.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/vue/{{properCase name}}.stories.js`,
        templateFile: 'vue/stories.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
