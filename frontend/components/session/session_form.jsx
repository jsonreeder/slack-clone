import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "" };
    /* this.handleSubmit = this.handleSubmit.bind(this);*/
  }

  render() {
    return(
      <div>
        Hello
      </div>
    );
  }
}

export default withRouter(SessionForm);
