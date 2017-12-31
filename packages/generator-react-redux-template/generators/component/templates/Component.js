import React from 'react';<% if (style) { %>
import styles from './style.css';<% } %>
<% if (isStateless) { %>
const <%= componentname %> = () => (<% if (style) { %>
  <div className={styles.container}>hello</div><% } else { %>
  <div>hello</div><% } %>
);<% } else { %>
class <%= componentname %> extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (<% if (style) { %>
      <div className={styles.container}>hello</div><% } else { %>
      <div>hello</div><% } %>
    );
  }
}<% } %>

export default <%= componentname %>;
