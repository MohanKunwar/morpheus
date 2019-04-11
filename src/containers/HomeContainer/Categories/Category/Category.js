import React, { Component } from 'react'
import './Category.css'
import axios from 'axios'
import Axios from '../../../../services/Axios'
import Spinner from '../../../../helpers/Spinner'
// import { MountCheckFetch } from '../../../../helpers/MountCheckFetch'

class Category extends Component {
  // signal = Axios.signal
  signal = axios.CancelToken.source()
  state = {
    subCategories: null,
    hover: false,
    categoryItems: null
  }

  loadSubCategories = id => {
    this.setState({ hover: true })
    if (!this.state.subCategories) {
      Axios.instance.get(Axios.API.common.getCategoryUrl(id), { cancelToken: this.signal.token }).then(response => {
        if (response && response.data) {
          if (response.data.data.length > 0) {
            this.setState({ subCategories: response.data.data })
          } else {
            this.setState({ subCategories: [] })
          }
        }
      })
    }

    // if (!this.state.subCategories) {
    //   try {
    //     const data = await MountCheckFetch(
    //       this.signal.token,
    //       Axios.API.common.getCategoryUrl + id + '/children'
    //     )
    //     if (data && data.data.length > 0) {
    //       this.setState({ subCategories: data.data })
    //     } else {
    //       this.setState({ subCategories: [] })
    //     }
    //   } catch (error) {
    //     if (Axios.isCancel(error)) {
    //       console.log('error', error.message)
    //     }
    //   }
    // }
  }
  render() {
    let categoryItems = null

    if (
      this.state.hover &&
      this.state.subCategories &&
      this.state.subCategories.length > 0
    ) {
      categoryItems = this.state.subCategories.map((item, index) => {
        return (
          <div className='sub-category-btn' key={index}>
            <span>{item.name}</span>
            {/* to do 
                    implement sub category filter to search page */}
            {/* <Link to='/search/business'><span>{item.name}</span></Link> */}
          </div>
        )
      })
    }
    return (
      <div
        className='category-btn'
        onMouseEnter={() => this.loadSubCategories(this.props.id)}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {this.props.name}
        <div className='sub-categories'>
          {categoryItems}
          {this.state.hover && !this.state.subCategories ? <Spinner /> : null}
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    this.signal.cancel({
      response: 'sub categories api cancelled'
    })
  }
}
export default Category
