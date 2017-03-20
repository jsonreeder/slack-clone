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
    let channelsList;
    if (this.props.forum.forums) {
      channelsList = <li>Success</li>;
      channelsList = <ul className="channels-index-channels-list">
        {this.props.forum.forums.map(forum => (
          <li>{forum.name}</li>
         ))}
      </ul>;
    }

    return(
      <div className="channels-index-body">
        <h2>
          Channels you can join
        </h2>
        {channelsList}
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
