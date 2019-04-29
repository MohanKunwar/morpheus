import React, { Component } from 'react';
import Axios from '../../../services/Axios'

class DealsIn extends Component {
    state = {
        dealsIn: null
    }
    componentWillMount() {
        Axios.instance.get(this.props.dealsIn).then(response => {
            this.setState({ dealsIn: response.data.data});
        })
    }
    render() {
        let dealsInList= [];
        if (this.state.dealsIn && this.state.dealsIn.length > 0) {
            this.state.dealsIn.map((item) => {
            if(item.children.length > 0) {
           dealsInList.push(item.children.map((item_children, index) => {
                  return <div key={index} className='deals-in'>
                    <div> {item_children.name} </div>
                    </div>
                })
           )
            }
            })
        }
        return (
            this.state.dealsIn ?
            dealsInList.length > 0 ?
                    <div className='business_section'>
                        <div className="business_heading">
                            Deals In
                            {console.log("wow", dealsInList.length)}
                        </div>
                        <div className='deals_in_section'>
                            {dealsInList.map((dealsInList) => {
                                return dealsInList
                            })}
                        </div>
                    </div>
                    : null
                : <div> loading</div>
        );
    }
}
export default DealsIn;