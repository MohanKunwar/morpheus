import React, { Component } from 'react';
import Axios from '../../../services/Axios';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import RequirementList from './RequirementList';
import * as moment from 'moment';
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
            this.state.requirements
            ? (
                <React.Fragment>
                    <div className='requirement-types'>
                    <Link to={`${currUrl}/approved`}>Approved</Link>
                    <Link to={`${currUrl}/pending`}>Pending</Link>
                    <Link to={`${currUrl}/completed`}>Completed</Link>
                    </div>
                    <Switch>
                        <Route path={`${currUrl}/approved`} 
                        component={() => <RequirementList items={this.state.requirements.filter(item => 
                            item.status === 'approved'
                        )} /> } />
                        <Route path={`${currUrl}/pending`} 
                        component={() => <RequirementList items={this.state.requirements.filter(item => 
                            item.status === 'pending'
                        )} /> } />
                        <Route path={`${currUrl}/completed`} 
                        component={() => <RequirementList items={this.state.requirements.filter(item => 
                            item.status === 'completed'
                        )} /> } />
                        <Redirect to={`${currUrl}/pending`} />
                    </Switch>
                </React.Fragment>
            )
            : <div>loading</div>
        )
    }
}

export default Requirements;

