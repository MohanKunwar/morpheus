import React, {Component} from 'react';
import axios from '../../../axios';


class DealsIn extends Component {
    state = {
        dealsIn: []
    }
    componentWillMount() {
        console.log('deals in', this.props.dealsIn);
        // this.props.dealsIn
        axios.get(this.props.dealsIn).then(response => {
            this.setState({ dealsIn: response.data.data });
        })
    }
    render() {
        let dealsInList = null;
        if (this.state.dealsIn.length > 0) {
            dealsInList = this.state.dealsIn.map((item) => {
                return (
                    <div key={item.id} className='deals-in'>
                        {item.name}
                    </div>
                )
            })
        }
        return (
            <div className='deals'>
                {dealsInList}
            </div>
        );
    }
}
export default DealsIn;