import React, {Component} from 'react'
class WriteReview extends Component {
    componentWillMount() {
    }
    sendToLogin = () => {
        this.props.history.push('/khoz/login')
    }
    render() {
        const { review, user } = this.props
       return(
            <div className='write_review'>
            { !user ? <button onClick={this.sendToLogin}>login to review</button> : null}
            <textarea></textarea>
            <button>Submit</button>
            </div>
            )
    }
}
export default WriteReview