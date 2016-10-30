'use strict';

module.exports = (templateType) => {
  switch(templateType) {
    case 0:
    case 'Web Application with React':
      return {
        id: 0,
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
        id: 1,
        npm: {
          env     : require('../npm/react-library/env'),
          tasks   : require('../npm/react-library/tasks'),
          setting : require('../npm/react-library/setting'),
          packages: require('../npm/react-library/packages')
        },
        templatePath: 'react-library'
      };
  }
}
