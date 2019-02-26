import React, { Component } from 'react';
export const SearchContext = React.createContext();

export class SearchContextProvider extends Component {
    state = {
        query: null,
        category: null,
        location: null,
        newest: null,
        popular: null,
        highest_rated: null
        
    }
    setCategory = category => {
        this.setState({category: category})
    }
    setLocation = location => {
        this.setState({location: location})
    }
    setNewest = newest => {
        this.setState({newest: newest})
    }
    setPopular = popular => {
        this.setState({popular: popular})
    }
    setHighestRated = highest_rated => {
        this.setState({highest_rated: highest_rated})
    }
    render() {
        return (
            <SearchContext.Provider value={{
                ...this.state,
               setCategory: this.setCategory,
               setLocation: this.setLocation,
               setNewest: this.setNewest,
               setPopular: this.setPopular,
               setHighestRated: this.setHighestRated
             }}> {this.props.children}</SearchContext.Provider>
        );
    }
}
