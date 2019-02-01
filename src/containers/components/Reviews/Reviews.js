import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './reviews.css';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faEdit, faStar } from /"@fortawesome/fontawesome-free-solid";


const Stars = (props) => {
    const rating = (props.reviews);
    let stars =[];
    for(let i=0; i<rating; i++){
        stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return(
        <div className="col">
       {/* {props.rating.map((number, i) =>
        <i key={i} className="fa fa-star">{number}</i>
        )} */}
        {stars}
        </div>
    );
  };

  const Actions = (props) => {
      return(
        <div className="col">
       <i className="fa fa-edit"></i>
        <i className="fa fa-trash-alt"></i>
        </div>
      );
  };

  const MainContent = (props) => {
        return(
            <div>{props.reviews}</div>
               
        );
  };

  const ReviewrName = (props) => {
      return(
        <div>{props.reviews}</div>
      )
  }

class Reviews extends Component {
   
        state = {
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

    render() {
   
        return (
            <div className="container">
           {
               this.state.reviews.map((rowdata) =>
               <div className="row mt-3">
               <div className="col-md-8 offset-md-2">
                <div className="card">
                <div className="card-header">
                <div className="row">
                <div className="col-6">
                <h5><ReviewrName reviews ={rowdata.reviewer_name} /> </h5>
                </div>
                <div className="col-6 text-right">
                <Actions />

                </div>
                </div>
            
                </div>
                <div className="card-body">
                <MainContent reviews={rowdata.body} />
                </div>
                <div className="card-footer">
                <div className="row">
                <div className="col-6 creare_date">
                {rowdata.created_at}
                </div>
                <div className="col-6 text-right">

            <Stars reviews = {rowdata.rating} />
           
            </div>
            </div>
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