import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLinks() {
    let signIn = <li><Link to='/signin' className="link-button">Sign in</Link></li>;
    let join = <li><Link to='/join' className="link-button">Join</Link></li>;
    let tryPage = <li><Link to='/try' className="link-button">Try</Link></li>;

    if (this.props.formType === 'signin') {
      signIn = undefined;
    } else if (this.props.formType === 'join') {
      join = undefined;
    } else if (this.props.formType === 'try') {
      tryPage = undefined;
    }

    return (
      <ul className='nav'>
        {join}
        {signIn}
        {tryPage}
      </ul>
    );
  }

  title() {
    if (this.props.formType === 'signin') {
      return <h1>Sign in to Slack Clone</h1>;
    } else if (this.props.formType === 'join') {
      return <h1>Join Slack Clone</h1>;
    } else {
      return <h1>Try Slack Clone</h1>;
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
         ))}
      </ul>
    );
  }

  authHeader() {
    return(
      <header className='header auth-header'>
        <a href="/">
          <ul className='brand'>
            <li>[logo]</li>
            <li>slack</li>
          </ul>
        </a>
        {this.navLinks()}
      </header>
    );
  }

  instructions() {
    let instructions;

    if (this.props.formType === 'try') {
      instructions = <p>
        Pick a <strong>guest</strong> personality.
      </p>;
    } else {
      instructions = <p>
        Enter your <strong>username</strong>&nbsp;
        and <strong>password</strong>.
      </p>;
    }

    return instructions;
  }

  authFormBody() {
    let authFormBody;

    if (this.props.formType === 'try') {
      authFormBody = <div className="login-form">
        <ul>
          <li>
            <Link to='/signin' className="link-button">Harold</Link>
            <Link to='/signin' className="link-button">Maude</Link>
          </li>
        </ul>
      </div>;
    } else {
      authFormBody = <div className="login-form">
        <ul>
          <li>
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input large-button"
            />
          </li>
          <li>
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input large-button"
            />
          </li>
        </ul>
        {this.renderErrors()}
        <input
          type='submit'
          value='Submit'
          className='green large-button'
        />
      </div>;
    }

    return authFormBody;
  }

  authForm() {
    return(
      <div className='auth-form-container'>
        <form onSubmit={this.handleSubmit} className='auth-form'>
          <div className="auth-form-header">
            {this.title()}
            <p className='subtitle'>
              slack-copy.heroku.com
            </p>
          </div>
          <div className="auth-form-body">
            {this.instructions()}
            {this.authFormBody()}
          </div>
        </form>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.authHeader()}
        {this.authForm()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
