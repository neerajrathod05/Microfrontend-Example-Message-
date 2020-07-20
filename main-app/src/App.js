import React, { Component } from "react";
import "./App.css";

const navigateTo = url => window.history.pushState(null, null, url);

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: window.location.pathname
    };
  }

  handleMenuClick = () => {
    this.setState(() => ({ pathname: window.location.pathname }));
  };

  render() {
    return (
      <div className="Menu" onClick={this.handleMenuClick}>
        {this.props.children(this.state.pathname)}
      </div>
    );
  }
}

const MenuItem = ({ link, children, pathname }) => {
  const classes = ["Menu-Item"];
  if (pathname === link) {
    classes.push("Menu-Item--Selected");
  }
  return (
    <div className={classes.join(" ")} onClick={() => navigateTo(link)}>
      {children}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stitching Layer in React 15</h1>
        </header>
        <div className="App-content">
          <Menu>
            {pathname => (
              <div>
                <MenuItem pathname={pathname} link="/">
                  All app
                </MenuItem>
                <MenuItem pathname={pathname} link="/react">
                  React 16 Micro app
                </MenuItem>
                <MenuItem pathname={pathname} link="/angular">
                  Angular Micro app
                </MenuItem>
              </div>
            )}
          </Menu>
          <div className="App-container">
            <div id="reacttt-app" />
            <div id="angular-app" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
