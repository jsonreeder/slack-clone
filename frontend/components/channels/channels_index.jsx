import React from 'react';
import { Link } from 'react-router';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllForums();
    $('html,body').css('overflow','hidden');
  }

  channelsIndexHeader() {
    return(
      <div className="channels-index-header">
        <div className="channels-index-nav">
          <ul className="escape">
            <Link to="/">
              <li id="x">&times;</li>
            </Link>
          </ul>
        </div>
        <h1>Browse all channels</h1>
      </div>
    );
  }

  channelsIndexBody() {
    return(
      <div className="channels-index-body">
        <h2>
          Channels you can join
        </h2>
        <ul>
          <li>A channel</li>
          <li>Another channel</li>
        </ul>
      </div>
    );
  }

  render() {
    return(
      <div className="channels-index-container">
        <div className="channels-index-selector-container">
          {this.channelsIndexHeader()}
          {this.channelsIndexBody()}
        </div>
      </div>
    );
  }
}

export default ChannelsIndex;
