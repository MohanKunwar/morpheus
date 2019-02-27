import React, { Component } from 'react'

class SearchFilters extends Component {

    componentWillMount(){
        // if (this.props.filters) {
        //     for (var key in this.props.filters) {
        //         this.props.context.setFilter(key, this.props.filters[key])
        //     }
        // }
    }
    updateFilter = (e, key, value) => {
        e.preventDefault()
        this.props.context.setFilter(key, value)
    }
    render() {
        console.log(this.props.context);
        return(
            <button onClick={e => this.updateFilter(e,'location', 'abc')} >abc</button>
        )
    }
}
export default SearchFilters;