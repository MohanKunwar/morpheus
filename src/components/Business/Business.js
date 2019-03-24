import React, { Component } from 'react'

class Businessc  extends Component {
    componentWillMount() {

        const { match: { params } } = this.props;
        switch (params.id) {
            case 'overview': {this.setState({active: 'overview'})
            break 
        }
            default: { this.setState({active: 'overview'})}
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Businessc;