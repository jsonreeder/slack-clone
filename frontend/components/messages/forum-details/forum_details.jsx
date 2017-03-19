import React from 'react';

class ForumDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleForum(this.props.params.forumName);
  }

  forumAbout () {
    let title;
    let topic;
    if (this.props.currentForum) {
      title = <h1 className="forum-title">
          About #{this.props.currentForum.name}
        </h1>;
      topic = <div className="forum-topic">
          {this.props.currentForum.topic}
        </div>;
    }

    return(
      <div className="forum-about">
        {title}
        {topic}
      </div>
    );
  }

  forumMembers () {
    const title = <h1>Members</h1>;
    let members;

    if (this.props.currentForum) {
      let rawMembers = this.props.currentForum.members;
      members = <ul className="forum-members">
        {rawMembers.map((member, idx) => (
           <li key={idx}>@ {member.username}</li>
         ))}
      </ul>;
    }

    return(
      <div className="forum-members">
        {title}
        {members}
      </div>
    );
  }

  render() {
    return(
      <ul className="forum-detail">
        <li>{this.forumAbout()}</li>
        <li>{this.forumMembers()}</li>
      </ul>
    );
  }
}

export default ForumDetails;
