import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class ChannelsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateMembership = this.handleCreateMembership.bind(this);
    this.state = {
      allChannels: []
    }
  }

  componentDidMount() {
    this.props.requestAllForums();
    $('html,body').css('overflow','hidden');
  }

  handleCreateMembership(forumName) {
    return e => {
      this.props.createMembership(forumName);
      hashHistory.push(`/messages/${forumName}/details`);
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.forum.forums.channels) {
      this.setState({allChannels: newProps.forum.forums.channels});
    }
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
    let channelsList = <ul className="channels-index-channels-list">
      {this.state.allChannels.map((forum, idx) => (
        <li key={idx}
            onClick={this.handleCreateMembership(forum.name)}
          >
            {forum.name}
        </li>
        ))}
    </ul>;

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
