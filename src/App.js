import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
// import { Auth } from 'aws-amplify'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Routes from './Routes'
import Footer from './containers/Footer'
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
      userHasAuthenticated: false,
    };
    this.myapp = React.createRef()
  }

  componentDidMount() {
  }

  render() {
    const { isAuthenticated, userHasAuthenticated } = this.state
    return (
      <div className="App" ref={this.myapp}>        
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bg-blue">
          <div className="container">            
            <Navbar.Brand>
              {/* <Link to="/"> */}
              <a href="/">
                <img
                  src="/images-codesemi/logo.png"
                  width="180"
                  // height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </a>
              {/* </Link> */}
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <LinkContainer to="/products"><Nav.Link>Products</Nav.Link></LinkContainer>
                <LinkContainer to="/support"><Nav.Link>Support</Nav.Link></LinkContainer>
                <LinkContainer to="/news"><Nav.Link>News</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
