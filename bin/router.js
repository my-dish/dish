'use strict';

module.exports = (templateType) => {
  switch(templateType) {
    case 0:
    case 'Web Application with React':
      return {
        id : 0,
        npm: {
          env     : require('../npm/react-application/env'),
          tasks   : require('../npm/react-application/tasks'),
          setting : require('../npm/react-application/setting'),
          packages: require('../npm/react-application/packages')
        },
        templatePath: 'react-application'
      };
    case 1:
    case 'React Library':
      return {
        id : 1,
        npm: {
          env     : require('../npm/react-library/env'),
          tasks   : require('../npm/react-library/tasks'),
          setting : require('../npm/react-library/setting'),
          packages: require('../npm/react-library/packages')
        },
        templatePath: 'react-library'
      };
    case 2:
    case 'Command Line Tool':
      return {
        id : 2,
        npm: {
          env     : require('../npm/cli/env'),
          tasks   : require('../npm/cli/tasks'),
          setting : require('../npm/cli/setting'),
          packages: require('../npm/cli/packages')
        },
        templatePath: 'cli'
      };
    case 4:
    case 'Web Application with React and Redux':
      return {
        id : 4,
        npm: {
          env     : require('../npm/react-redux-application/env'),
          tasks   : require('../npm/react-redux-application/tasks'),
          setting : require('../npm/react-redux-application/setting'),
          packages: require('../npm/react-redux-application/packages')
        },
        templatePath: 'react-redux-application'
      };
    case 5:
    case 'Plain':
      return {
        id : 5,
        npm: {
          env     : require('../npm/plain/env'),
          tasks   : require('../npm/plain/tasks'),
          setting : require('../npm/plain/setting'),
          packages: require('../npm/plain/packages')
        },
        templatePath: 'plain'
      };
  }
};
