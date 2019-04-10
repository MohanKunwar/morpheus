import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category/Category'
import Axios from '../../../services/Axios'
import './Categories.css'
import Spinner from '../../../helpers/Spinner'
import { MountCheckFetch } from '../../../helpers/MountCheckFetch'

class Categories extends Component {
  signal = Axios.signal
  state = {
    categories: []
  }
  componentWillMount() {
    this.getCategories()
  }
  getCategories = async () => {
    try {
      const data = await MountCheckFetch(
        this.signal.token,
        Axios.API.common.topLevelCategoriesUrl
      )
      this.setState({ categories: data.data })
    } catch (error) {
      if (Axios.isCancel(error)) {
        console.log('error', error.message) 
      }
    }

  }

  render() {
    let categories = null
    if (this.state.categories.length > 0) {
      categories = this.state.categories.map(item => {
        return (
          <Link
            to={`/search/business?category=${item.slug.trim()}`}
            key={item.id}
            className='sidenav-categories'
          >
            <Category name={item.name} id={item.id} />
          </Link>
        )
      })
    } else {
      categories = <Spinner />
    }

    return categories
  }
  componentWillUnmount() {
    this.signal.cancel('Categories api cancelled')
  }
}

export default Categories
