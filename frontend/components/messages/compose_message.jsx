import React from 'react';

class ComposeMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
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
            placeholder={placeholder}
          />
        </form>
      </div>
    );
  }
}

export default ComposeMessage;
