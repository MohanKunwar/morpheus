import React, { Component } from 'react'
import Axios from '../../services/Axios'
import Spinner from '../../helpers/Spinner'

import OverviewEdit from './ProfileEdit/OverviewEdit'
import DealsInEdit from './ProfileEdit/DealsInEdit'
import PhotosEdit from './ProfileEdit/PhotosEdit'
import ProductsEdit from './ProfileEdit/ProductsEdit'
import ServicesEdit from './ProfileEdit/ServicesEdit'
import HotelEdits from './HotelEdit'

import './BusinessEdit.css'

class BusinessEdit extends Component {
    state = {
        tab: 'Overview',
        dealsIn: null,
        products: null,
        photos: null,
        hotel: {

        }
    }

    tabs = ['Overview', 'Photos', 'Products', 'Services', 'Deals In']

    componentWillMount() {
        if (this.props.businessUrl) {
            this.getBusiness(this.props.businessUrl)
        }
    }
    getBusiness(businessUrl) {
        Axios.authInstance.get(Axios.API.business.getBusinessUrl(businessUrl)).then(response => {
            if (response && response.data) {
                if (response.data.data.feature_enabled.includes('hotel')) {
                    this.tabs.push('Manage Hotel')
                }
                this.setState({
                    business: response.data.data
                })
                document.title = `Edit-${response.data.data.name}`
                console.log(response.data.data)
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.businessUrl !== nextProps.businessUrl) {
            this.getBusiness(nextProps.businessUrl)
        }
    }
    getDealsIn() {
        if (!this.state.dealsIn) {
            Axios.authInstance.get(this.state.business.dealsin_url).then(response => {
                if (response && response.data) {
                    this.setState({ dealsIn: response.data.data })
                }
            })
        }
    }

    getProducts = () => {
        if (!this.state.products) {
            Axios.authInstance.get(Axios.API.business.getBusinessProductsUrl(this.state.business.slug)).then(response => {
                if (response && response.data) {
                    response.data.data.map(product => product.business = this.state.business)
                    this.setState({ products: response.data.data })
                }
            })
        }
    }

    getPhotos() {
        if (!this.state.photos) {
            Axios.authInstance.get(this.state.business.photos_url).then(response => {
                console.log(response)
                if (response && response.data) {
                    console.log(response.data.data)
                    this.setState({ photos: response.data.data })
                }
            })
        }
    }
    changeTab = (e, tab) => {
        e.preventDefault()
        this.setState({ tab: tab })
        // this.tab.validate
        // integrate next button as well
    }
    render() {
        let activeTab
        switch (this.state.tab) {
            case 'Overview': default: {
                activeTab = <OverviewEdit business={this.state.business} />
                break
            }
            case 'Photos': {
                this.getPhotos()
                activeTab = <PhotosEdit photos={this.state.photos} businessSlug={this.props.businessUrl} />
                break
            }
            case 'Products': {
                this.getProducts()
                activeTab = <ProductsEdit products={this.state.products} />
                break
            }
            case 'Services': {
                activeTab = <ServicesEdit />
                break
            }
            case 'Deals In': {
                this.getDealsIn()
                activeTab = <DealsInEdit dealsIn={this.state.dealsIn} />
                break
            }
            case 'Manage Hotel': {
                activeTab = <HotelEdits business={this.state.business} />
                break
            }
        }
        return (
            this.state.business ?
                <div className='business_edit_container card-container'>
                    <div className='business_edit_tabs'>
                        {
                            this.tabs.map((tab, index) =>
                                <span
                                    className={`business_edit_tab ${this.state.tab === tab ? 'active' : ''}`}
                                    onClick={e => this.changeTab(e, tab)}
                                    key={index}>
                                    {tab}
                                </span>
                            )
                        }
                    </div>
                    {activeTab}
                </div>
                : <Spinner />
        )
    }

}


export default BusinessEdit
