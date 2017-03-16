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

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to='/join' className="link-button">Join</Link>;
    } else {
      return <Link to='/signin' className="link-button">Sign in</Link>;
    }
  }

  title() {
    if (this.props.formType === 'signin') {
      return <h1>Sign in to Slack Clone</h1>;
    } else {
      return <h1>Join Slack Clone</h1>;
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

  render() {
    return(
      <div>
        <header className='header auth-header'>
          <a href="/">
            <ul className='brand'>
              <li>[logo]</li>
              <li>slack</li>
            </ul>
          </a>
          <ul className='nav'>
            <li>
              {this.navLink()}
            </li>
          </ul>
        </header>

        <div className='auth-form-container'>
          <form onSubmit={this.handleSubmit} className='auth-form'>
            <div className="auth-form-header">
              {this.title()}
              <p className='subtitle'>
                slack-copy.heroku.com
              </p>
            </div>
            <div className="auth-form-body">
              <p>
                Enter your <strong>username</strong>&nbsp;
                and <strong>password</strong>.
              </p>
              <div className="login-form">
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
              </div>
              <input
                type='submit'
                value='Submit'
                className='green large-button'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
