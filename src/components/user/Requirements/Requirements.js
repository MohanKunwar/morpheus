import React, { Component } from 'react';
import Axios from '../../../services/Axios';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import RequirementList from './RequirementList';
import * as moment from 'moment';
import './requirement.css';
import Spinner from '../../../helpers/Spinner';
class Requirements extends Component {
    state = {
        requirements: null
    }
    componentWillMount() {
        Axios.authInstance.get(Axios.API.user.getUserRequirementsUrl).then(
            response => {
                if (response.data) {
                    this.setState({requirements: response.data.data.map(item => {
                        let timeDiffInHours = moment(new Date()).diff(moment(item.created_at), 'hours')
                        if (timeDiffInHours < 24) {
                            item.created_at = `Posted ${timeDiffInHours} hours ago`
                        } else {
                            item.created_at = `Posted ${Math.floor(timeDiffInHours/24)} days ago`
                        }
                        return item
                    })})
                }
                console.log('response', this.state.requirements)
            }
        )
    }
    render() {
        let currUrl = this.props.match.url
        return (
            <div className="card-container">
            <h4 className="card_header">My Requirements</h4>
           { 
               this.state.requirements
            ? (
                <React.Fragment>
                    <div className='requirement-types'>
                    <NavLink to={`${currUrl}/approved`} className="require_status">Approved</NavLink>
                    <NavLink to={`${currUrl}/pending`} className="require_status">Pending</NavLink>
                    <NavLink to={`${currUrl}/completed`} className="require_status">Completed</NavLink>
                    </div>

                    <div className="requirement-details">
                    <Switch>
                        <Route path={`${currUrl}/approved`} 
                        component={() => <RequirementList items={this.state.requirements.filter(item => 
                            item.status === 'approved' && item.closed_at === null
                        )} /> } />
                        <Route path={`${currUrl}/pending`} 
                        component={() => <RequirementList items={this.state.requirements.filter(item => 
                            item.status === 'pending' && item.closed_at === null
                        )} /> } />
                        <Route path={`${currUrl}/completed`} 
                        component={() => <RequirementList items={this.state.requirements.filter(item => 
                            item.closed_at
                        )} /> } />
                        <Redirect to={`${currUrl}/pending`} />
                    </Switch>
                        </div>
                </React.Fragment>
            )
            : <Spinner />
        }
        </div>
        )
    }
}

export default Requirements;

