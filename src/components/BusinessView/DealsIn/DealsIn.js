import React, {Component} from 'react';
import Axios from '../../../services/Axios';
import "./Dealsin.css";

class DealsIn extends Component {
    state = {
        dealsIn: []
    }
    componentWillMount() {
        console.log('deals in', this.props.dealsIn);
        Axios.instance.get(this.props.dealsIn).then(response => {
            this.setState({ dealsIn: response.data.data });
        })
    }
    render() {
        let dealsInList = null;
        if (this.state.dealsIn.length > 0) {
            dealsInList = this.state.dealsIn.map((item) => {
                return (
                    <div key={item.id} className='deals-in'>
                        <div> {item.name} </div>
                    </div>
                )
            })
        }
        return (
            this.state.dealsIn.length > 0 ?
            <div className='deals'>
                {dealsInList}
            </div>
            : <div> loading</div>
        );
    }
}
export default DealsIn;