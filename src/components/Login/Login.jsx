import React, { Component, Fragment } from "react"
import { Route } from 'react-router'
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
import { Alert } from 'react-bootstrap'
import NavbarFeatures from "../NavbarFeatures/NavbarFeatures";

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

    return <Route path='/entrar' component={() => <Login baseUrl={this.props.baseUrl}/>} />
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
      this.history.push('/')
    } 
  }

  render() {
    return (
      <Fragment>
        <NavbarFeatures />
        <Container>
          <br/>
          <Row center={true}>
            <Col md="6">
              <Card>
                <CardBody>
                  <form action="/" onSubmit={this.handleSubmit}>
                    <p className="h4 text-center py-4">Bem vindo!</p>
                    <div className="grey-text">
                      <Input label="Email" icon="envelope" group type="email" id="userLogin" onChange={this.handleChange} validate error="wrong" success="right"/>
                      <Input label="Senha" icon="lock" group type="password" id="userPassword" onChange={this.handleChange} validate/>
                    </div>
                    <div className="text-center py-4 mt-3">
                      <Button color="amber" type="submit">Entrar&nbsp;<Fa icon="sign-in"/></Button>
                      {
                        this.state.serverResponse.error_message
                        ?
                        <Alert bsStyle="warning">
                          <strong>{this.state.serverResponse.error_message}</strong>
                        </Alert>
                        :
                        ''
                      }
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
export default Login
