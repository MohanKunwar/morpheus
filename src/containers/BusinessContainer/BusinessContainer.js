import React, { Component } from 'react'
import KhozContext from '../../services/Context'
import BusinessView from '../../components/BusinessView'
import BusinessEdit from '../../components/BusinessEdit'
import Spinner from '../../helpers/Spinner'

class BusinessContainer extends Component {
    state = {
        isUserOwner: undefined,
        businessUrl: this.props.match.params.id
    }
    componentWillMount() {

        this.checkOwner(this.state.businessUrl)
    }
    checkOwner(id) {
        if (this.props.context.user && this.props.context.user.businesses.length > 0) {
            let ownerIndex = this.props.context.user.businesses.findIndex(business => business.slug === id)
            ownerIndex > -1 ? this.setState({isUserOwner: true}) : this.setState({ isUserOwner: false })
        } else {
            this.setState({ isUserOwner: false })
        }
    }
    componentWillReceiveProps(nextProps) {
        // if (this.params !== nextProps.match.p)
        // const {match: {params}} = nextProps
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.checkOwner(nextProps.match.params.id)
            this.setState({businessUrl: nextProps.match.params.id})
        }
        console.log(nextProps)
    }
    render() {
            if (!this.state.isUserOwner) {
                return (<BusinessView businessUrl={this.state.businessUrl} />)
            } else if (this.state.isUserOwner) {
                return (<BusinessEdit businessUrl={this.state.businessUrl} user={this.props.context.user} />)
            } else {
                return (<Spinner />)
            }
    }

}


export default KhozContext.withAppContext(BusinessContainer)
