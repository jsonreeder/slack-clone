import React from 'react';

class ComposeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState({body: ""});
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    let placeholder;
    if (this.props.currentForum) {
      placeholder =`Message #${this.props.currentForum.name}`;
    }

    return(
      <div className="compose-message-container">
        <form
          className="compose-message-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder={placeholder}
            className="message-input"
          />
        </form>
      </div>
    );
  }
}

export default ComposeMessage;
