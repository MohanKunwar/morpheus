import React, { Component } from 'react';
export const SearchContext = React.createContext();

export class SearchContextProvider extends Component {
   state = {}
    setFilter = (key, value) => {
        console.log(key, value)
        this.setState({...this.state, [key]: value})
    }
    setFilters = (filterObject) => {
        this.setState({
            ...this.state,
            filters: filterObject

        })
    }
    render() {
        return (
            <SearchContext.Provider value={{
                ...this.state,
                setFilter: (key, value) => this.setFilter(key, value),
                setFilters: filterObject => this.setFilters(filterObject)
             }}> {this.props.children}</SearchContext.Provider>
        );
    }
}
