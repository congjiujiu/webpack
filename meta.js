module.exports = {
  prompts: {
    name: {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    description: {
      type: "string",
      required: false,
      message: "Project description",
      default: "A Vue.js project"
    },
    author: {
      type: "string",
      message: "Author"
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['vue-router', 'vuex'],
      default: ['vue-router', 'vuex']
    },
    lint: {
      type: "confirm",
      message: "Use ESLint to lint your code?"
    },
    lintConfig: {
      when: "lint",
      type: "list",
      message: "Pick an ESLint preset",
      choices: [
        {
          name: "Standard (https://github.com/feross/standard)",
          value: "standard",
          short: "Standard"
        },
        {
          name: "AirBNB (https://github.com/airbnb/javascript)",
          value: "airbnb",
          short: "AirBNB"
        },
        {
          name: "none (configure it yourself)",
          value: "none",
          short: "none"
        }
      ]
    },
    unit: {
      type: "confirm",
      message: "Setup unit tests with Karma + Mocha?"
    },
    e2e: {
      type: "confirm",
      message: "Setup e2e tests with Nightwatch?"
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    },
    deps (plugins) {
      let output = '';
      let dependencies = {
        'vue-router': '^2.1.2',
        'vuex': '^2.1.1'
      };

      // if (Object.keys(plugins).length > 0) output += ',\n';

      Object.keys(plugins).forEach((p, i) => {
        output += `    "${p}": "${dependencies[p]}"`;
        output += ',\n';
      })

      return output;
    },
  },
  filters: {
    ".eslintrc.js": "lint",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e",
    "src/store/**/*":  'plugins[\'vuex\']',
  },
  completeMessage: "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
