import React from 'react';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllForums();
  }

  render() {
    return(
      <div>
        <h1>Browse all channels</h1>
      </div>
    );
  }
}

export default ChannelsIndex;
