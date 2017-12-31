# @my-dish/generator-react-redux-template

## Usage
```sh
$ npm i -g @my-dish/generator-babel-template
$ yo
```

## Output
- [Component](#component)
- [Container](#container)
- [Action](#action)
- [Reducer](#reducer)

### Component
#### Questions
- What is the name of the component?
- Do you want to use a stateless component?
- Do you want to use css-module?
- Do you want to create an entrypoint(index.js)?

#### Files
- index.js(default: on)
- {Component}.js(the file name can be specified)
  - Class
  - SFC
- style.css(default: on)

```
.
├── Component.js
├── index.js
└── style.css

0 directories, 3 files
```

#### Templates
##### Entry Point
```js
// index.js
export default from './Component';
```

##### Style
```css
/* style.css */
.container {

}
```

##### Component
###### Class
```js
// Component.js
import React from 'react';
import styles from './style.css';

class Component extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>hello</div>
    );
  }
}

export default Component;
```

###### Functional Stateless Component
```js
// Component.js
import React from 'react';
import styles from './style.css';

const Component = () => (
  <div className={styles.container}>hello</div>
);

export default Component;
```

### Container
#### Questions
- What is the name of the container?

#### Files
- {Container}.js(the file name can be specified)

#### Templates
##### Container
```js
import { connect } from 'react-redux';
// import * as actions from '';
// import Component from '';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(actions.updateName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(/* component's name */);
```

### Action
#### Questions
- What is the name of the action?
#### Files
- {action}.js

#### Templates
##### Action
```js
export const fetchUsers = () => ({
  type: 'FETCH_USERS'
});
```

### Reducer
#### Questions
- Which template do you create?
- What is the name of the reducer?
- Do you want to create an entrypoint(index.js)?

#### Files
- {reducer}.js
- index.js

#### Templates
##### Entry Point
```js
import { combineReducers } from 'redux';
import reducer from './reducer';

const reducer = combineReducers({
  reducer
});

export default reducer;
```

##### Reducer
```js
const initialState = {
  list: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
```
