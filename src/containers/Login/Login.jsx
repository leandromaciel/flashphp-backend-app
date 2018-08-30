import React, { Component, Fragment } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import "./Login.css";
import MainMenu from "../MainMenu/MainMenu";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogin: "",
      userPassword: "",
      serverResponse: {
        authorized: false,
        error_message: false
      }
    }

    if (this.props.logout) {
      this.handleLogout()
    }
  }

  handleLogout = () => {
    localStorage.removeItem('CSRF_TOKEN_NAME')
    localStorage.removeItem('CSRF_TOKEN_VALUE')
    localStorage.removeItem('CREDENTIALS')
    localStorage.removeItem('USER_LOGIN')

    this.props.history.push('/')
  }

  validateForm() {
    return this.state.userLogin.length > 0 && this.state.userPassword.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const loginData = {
      userLogin: this.state.userLogin,
      userPassword: this.state.userPassword
    }

    fetch(this.props.baseUrl+'/usuario/entrar', {
        method: 'POST',
        body: JSON.stringify(loginData)
    }).then((response) => {
        if ( response.status === 200 ) {
          return response.json();
        }
    })
    .then((responseJSON) => {
        this.setState({
          serverResponse: responseJSON
        })

        this.handleServerResponse()
        this.props.history.push('/')
    })
    .catch((responseError) => {
        this.setState({
            error: responseError
        })
    })
  }

  handleServerResponse = () => {
    if (this.state.serverResponse.AUTHORIZED) {
      localStorage.setItem('CSRF_TOKEN_VALUE', this.state.serverResponse.CSRF_TOKEN_VALUE)
      localStorage.setItem('CSRF_TOKEN_NAME', this.state.serverResponse.CSRF_TOKEN_NAME)
      localStorage.setItem('CREDENTIALS', this.state.serverResponse.CREDENTIALS)
      localStorage.setItem('USER_LOGIN', this.state.serverResponse.USER_LOGIN)
      return true
    } 
  }

  render() {
    return (
      <Fragment>
        <MainMenu />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="userLogin" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.userLogin}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="userPassword" bsSize="large">
              <ControlLabel>Senha</ControlLabel>
              <FormControl
                value={this.state.userPassword}
                onChange={this.handleChange}
                type="password"
              />
              { 
                this.state.serverResponse.error_message 
                ? <div>{this.state.serverResponse.error_message}</div>
                : ''
              }
            </FormGroup>
            <Button
              className='btn-default'
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Entrar
            </Button>
          </form>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Login)
