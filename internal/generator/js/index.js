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
    {
      type: 'confirm',
      name: 'test',
      default: true,
      message: 'Do you want add test file?',
    },
  ],
  actions: ({ test }) => {
    const actions = [
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/index.js`,
        templateFile: 'js/index.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/{{properCase name}}.stories.js`,
        templateFile: 'js/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/README.md`,
        templateFile: 'js/README.hbs',
        abortOnFail: true,
      },
    ];
    if (test) {
      actions.push({
        type: 'add',
        path: `${componentPath}/{{properCase name}}/{{properCase name}}.test.js`,
        templateFile: 'js/test.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
