# Snapshot report for `packages/generator-react-redux-template/test/component/index.js`

The actual snapshot is saved in `index.js.snap`.

Generated by [AVA](https://ava.li).

## should return template files

> Snapshot 1

    `import React from 'react';␊
    import styles from './style.css';␊
    ␊
    const Component = () => (␊
      <div className={styles.container}>hello</div>␊
    );␊
    ␊
    export default Component;␊
    `

> Snapshot 2

    `export default from './Component';␊
    `

> Snapshot 3

    `.container {␊
    ␊
    }␊
    

## should rename the file name and the component is stateless

> Snapshot 1

    `import React from 'react';␊
    ␊
    const test = () => (␊
      <div>hello</div>␊
    );␊
    ␊
    export default test;␊
    

## should rename the file name and the component is not stateless

> Snapshot 1

    `import React from 'react';␊
    ␊
    class test extends React.Component {␊
      constructor() {␊
        super();␊
    ␊
        this.state = {};␊
      }␊
    ␊
      render() {␊
        return (␊
          <div>hello</div>␊
        );␊
      }␊
    }␊
    ␊
    export default test;␊
    `

> Snapshot 2

    `export default from './test';␊
    `

## should rename the file name and the component is stateless

> Snapshot 2

    `export default from './test';␊
    `