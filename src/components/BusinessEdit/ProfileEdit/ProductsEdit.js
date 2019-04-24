import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import ProductCard from '../../../UI/ProductCard';
import KhozModal from '../../../UI/KhozModal';
import AddEditProduct from '../../../UI/AddEditProduct'
import Axios from '../../../services/Axios';

export default class ProductsEdit extends Component {
    state = {
        modals: {},
        products : this.props.products
    }
    toggleModal = (id, command) => {
        if (id && command) {
            Axios.authInstance.get(Axios.API.product.getProductPhotosUrl(id)).then(response => {
                if (response && response.data) {
                    this.setState(prevState => ({
                        ...prevState, 
                        modals: {
                            ...prevState.modals,
                            [`modal${id}`]: true
                        },
                        [`photos${id}`]: response.data.data 
                    }))
                }
            })
        } else if (id && this.state[`photos${id}`])  {
            this.setState(prevState => ({
                ...prevState, modals: {
                    ...prevState.modals,
                    [`modal${id}`]: true
                }
            }))
        }  else {
            this.setState({ modals: {}, add: false })
        }
    }
    openAddProduct = () => {
        this.setState({ add: true })
    }
    getProduct = id => {
        Axios.authInstance.get(Axios.API.product.getProductUrl(id)).then(response => {
            if (response && response.data) {
                response.data.data.business = this.props.business
                let productIndex = this.props.products.findIndex(product => product.id === response.data.data.id)
                this.props.products.splice(productIndex, 1, response.data.data)
            }
        })
    }
    render() {
        return (
            this.props.products
                ?
                <div className='business_products_edit'>
                    <button onClick={this.openAddProduct}>Add Product</button>
                    {
                        this.state.add ?
                            <KhozModal
                                showModal={this.state.add}
                                title={'Edit Product'}
                                toggleModal={this.toggleModal}
                            >
                                <AddEditProduct />
                            </KhozModal>
                            : null
                    }
                    {
                        this.props.products.map(product =>
                            <React.Fragment key={product.id}>
                                <ProductCard product={product} index={product.id} edit={e => this.toggleModal(product.id, 'open')} />
                                {
                                    this.state.modals[`modal${product.id}`] ?
                                        <KhozModal
                                            showModal={this.state.modals[`modal${product.id}`]}
                                            title={'Edit Product'}
                                            toggleModal={this.toggleModal}
                                        >
                                            <AddEditProduct refresh={e => this.getProduct(product.id)} businessSlug={this.props.businessSlug} product={product} photos={this.state[`photos${product.id}`]} />
                                        </KhozModal>
                                        : null
                                }

                            </React.Fragment>
                        )
                    }
                </div>
                : <Spinner />
        )
    }
}