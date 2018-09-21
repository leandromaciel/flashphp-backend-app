import React, { Component, Fragment } from 'react'
import { Alert, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class UserForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            [this.props.data.id+"_login"]: this.props.data.login,
            [this.props.data.id+"_password"]: '',
            [this.props.data.id+"_security_hash"]: this.props.data.security_hash,
            serverResponse: {
                error_message: false,
                success_message: false
            }
        }
        console.log(this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const postData = {
            id: event.target.id,
            security_hash: this.state[event.target.id+"_security_hash"], 
            login: this.state[event.target.id+"_login"],
            password: this.state[event.target.id+"_password"]
        }

        this.setState({
            serverResponse: {
                error_message: false,
                success_message: false
            }
        })
        
        fetch(this.props.urlSaveData, {
            method: 'POST',
            body: JSON.stringify(postData)
        }).then((response) => {
            if ( response.status === 200 ) {
              return response.json();
            }
        })
        .then((responseJSON) => {
            this.setState({
              serverResponse: responseJSON
            })
    
            console.log(responseJSON)
        })
        .catch((responseError) => {
            this.setState({
                error: responseError
            })
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id={this.props.data.id}>
                    <FormGroup controlId={this.props.data.id+'_login'} bsSize="lg">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state[this.props.data.id+"_login"]}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId={this.props.data.id+'_password'} bsSize="lg">
                        <ControlLabel>Senha</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state[this.props.data.id+"_password"]}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        className='btn-success'
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Alterar Usuário
                    </Button>
                </form>
                <Fragment>
                    {
                        this.state.serverResponse.error_message
                        ?
                        <Alert bsStyle="warning">
                            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                        </Alert>
                        :''
                    }
                    {
                        this.state.serverResponse.success_message
                        ?
                        <Alert bsStyle="success">
                            <strong>EITA PORRA!</strong> e não é que salvou mesmo?.
                        </Alert>
                        :''
                    }
                </Fragment>
            </div>
        )
    }
}
