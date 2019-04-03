import React, { Component } from 'react'
import KhozContext from '../../services/Context'
import BusinessView from '../../components/BusinessView'
import BusinessEdit from '../../components/BusinessEdit'
import Spinner from '../../helpers/Spinner'

class BusinessContainer extends Component {
    state = {
        isUserOwner: undefined
    }
    componentWillMount() {
        const { match: { params } } = this.props
        if (this.props.context.user && this.props.context.user.businesses.length > 0) {
            let ownerIndex = this.props.context.user.businesses.findIndex(business => business.slug === params.id)
            ownerIndex > -1 ? this.setState({isUserOwner: true}) : this.setState({ isUserOwner: false })
        } else {
            this.setState({ isUserOwner: false })
        }
    }
    render() {
            if (!this.state.isUserOwner) {
                return (<BusinessView businessUrl={this.props.match.params.id} />)
            } else if (this.state.isUserOwner) {
                return (<BusinessEdit businessUrl={this.props.match.params.id} user={this.props.context.user} />)
            } else {
                return (<Spinner />)
            }
    }

}


export default KhozContext.withAppContext(BusinessContainer)
