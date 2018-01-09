import React, {Component} from 'react';
import get from 'lodash.get';
import './App.css';
import Pinterest from './pinterest';

class App extends Component {

  state = {
    profile: null,
    loggedIn: Pinterest.loggedIn()
  };

  componentWillMount() {
    if (this.state.loggedIn) {
      this.loadProfile();
    }
  }

  loadProfile = () => {
    Pinterest.profile(response => {
      if (!response || response.error) {
        return;
      }
      this.setState({profile: response.data});
    });
  };

  login = () => {
    Pinterest.login(() => {
      this.setState({
        loggedIn: Pinterest.loggedIn()
      });
      this.loadProfile();
    });
  };

  render() {
    const {loggedIn, profile} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pinterest API Demo</h1>
        </header>
        <div className="App-intro">
          {loggedIn && profile ? (
            <div>
              <img src={get(profile, 'image.60x60.url')} alt="Avatar"/>
              <div>Hello {get(profile, 'username')}</div>
            </div>
          ) : (
            <button className="button button--pinterest" onClick={this.login}>
              Log in
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
