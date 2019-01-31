import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './reviews.css';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
// import { faEdit, faCoffee } from '@fortawesome/fontawesome-free-solid

const Stars = (props) => {
    return(
     <i className="fa fa-star"></i>
    );
  }

  const Actions = (props) => {
      return(
        <i className="fa fa-edit"></i>
        // <i className="fa fa-trash-alt"></i>
      );
  }

class Reviews extends Component {
    constructor(props) {
    super(props)
    this.state = {
        reviews: [
            {
                id: 1,
                business_id: 1,
                reviewer_name: 'Charli',
                rating: 5,
                body: 'text body',
                status: 1,
                created_at: '01/01/2011',
                updated_at: '01/02/2012'

            },
            {
                id: 2,
                business_id: 2,
                reviewer_name: 'Jhon',
                rating: 5,
                body: 'text body',
                status: 1,
                created_at: '01/01/2011',
                updated_at: '01/02/2012'

            }
        ]
    }
}

    render() {
        return (
            <div className="container">
           {
               this.state.reviews.map((rowdata,i) =>
            <div className="card">
            <div className="card-header">
            <div className="row">
            <div className="col-6">
            <a>{rowdata.reviewer_name }</a>
            <br></br>
            <small>{rowdata.created_at}</small>
            </div>
            <div className="col-6 text-right">
            <Actions />

            </div>
            </div>
           
            </div>
            <div className="card-body">
            {rowdata.body}
            </div>
            <div className="card-footer">
            <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6 text-right">

            <Stars />
           
            </div>
            </div>
            </div>
             
            </div>
            )
        }
            </div>
        );
        }
}

export default Reviews;