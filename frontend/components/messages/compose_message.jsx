import React from 'react';

class ComposeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      messageable_type: "User"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({messageable_id: this.props.currentUser.id});
    this.setState({forum_id: 34});
    console.log(this.props);
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
