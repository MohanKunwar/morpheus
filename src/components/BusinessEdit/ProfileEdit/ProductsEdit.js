import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import ProductCard from '../../../UI/ProductCard';
import KhozModal from '../../../UI/KhozModal';
import AddEditProduct from '../../../UI/AddEditProduct'
import Axios from '../../../services/Axios';

export default class ProductsEdit extends Component {
    state = {
        modals: {}
    }
    toggleModal = id => {
        if (id && this.state[`photos${id}`])  {
            this.setState(prevState => ({
                ...prevState, modals: {
                    ...prevState.modals,
                    [`modal${id}`]: true
                }
            }))
        } else if (id) {
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
        } else {
            this.setState({ modals: {}, add: false })
        }
    }
    openAddProduct = () => {
        this.setState({ add: true })
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
                                <ProductCard product={product} index={product.id} edit={e => this.toggleModal(product.id)} />
                                {
                                    this.state.modals[`modal${product.id}`] ?
                                        <KhozModal
                                            showModal={this.state.modals[`modal${product.id}`]}
                                            title={'Edit Product'}
                                            toggleModal={this.toggleModal}
                                        >
                                            <AddEditProduct product={product} photos={this.state[`photos${product.id}`]} />
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