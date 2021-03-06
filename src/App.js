import React, { Component } from "react";
import PropTypes from "prop-types";

import Main from "./components/sign/Main";
import Dash from "./components/dash/Dash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    window.firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.displayName);
        localStorage.setItem("userID", user.uid);
        localStorage.setItem("userEmail", user.email);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
        localStorage.removeItem("userID");
        localStorage.removeItem("userEmail");
      }
    });
  }
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (<div>{this.state.user ? <Dash body={children} /> : <Main />}</div>);
  }
}

export default App;
