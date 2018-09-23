import React, { Component } from 'react'
import { connect } from 'react-redux'

class Network extends Component {

  render() {

    return (
        <div className="margin-top-navbar-content">
            {this.props.config.networkError &&
                <div className="alert alert-warning" role="alert">
                    {this.props.config.networkErrorMessage}
                </div>
            }
            {this.props.config.genericError &&
                <div className="alert alert-danger" role="alert">
                    {this.props.config.genericErrorMessage}
                </div>
            }
        </div>
    )
  }
}
    
const mapStateToProps = state => ({
    config: state.config
}) 

export default connect(mapStateToProps)(Network)