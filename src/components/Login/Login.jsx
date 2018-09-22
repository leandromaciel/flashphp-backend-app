import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ToastContainer, toast } from 'mdbreact';

import * as userActions from '../../actions/user'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userLogin: '',
            userPassword: ''
        }

        if (this.props.action === 'logout') {
            this.handleLogout()
        }
    }

    handleLogout = () => {
        localStorage.removeItem('USER_LOGIN')
        localStorage.removeItem('CSRF_TOKEN_VALUE')
        this.props.history.push('/')
    }

    handleChange = (field) => {
        this.setState({
            [field.target.name]: field.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.requestUserLogin(this.state)
    }

    handleMessage = () => {
        toast.error(this.props.user.error, {
            autoClose: 3000
        })
    }

    componentDidUpdate() {
        if (this.props.user.credentials.AUTHORIZED) {
            this.props.history.push('/painel')
        }
    }

    render() {
        return (
        <div>
            <Container className="margin-top-navbar-login">
                <Row center>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <p className="h4 text-center py-4">Bem vindo!</p>
                                    <div className="grey-text">
                                        <Input label="Email" name="userLogin" onChange={this.handleChange} icon="envelope" group type="email" validate error="wrong" success="right"/>
                                        <Input label="Senha" name="userPassword" onChange={this.handleChange} icon="lock" group type="password" validate/>
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <Button color="indigo" type="submit">Entrar <Fa icon="sign-in" /></Button>
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        { this.props.user.loading && <Fa icon="spinner" pulse size="3x" className="indigo-text" fixed/> }
                                        { this.props.user.error && this.handleMessage() }
                                    </div>
                                </form>
                            </CardBody>
                        </Card>

                        <ToastContainer
                            hideProgressBar={true}
                            newestOnTop={true}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(userActions, dispatch)

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))