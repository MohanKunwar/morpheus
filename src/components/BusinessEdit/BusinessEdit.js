import React, { Component } from 'react';
import Axios from '../../services/Axios';
import Spinner from '../../helpers/Spinner';

import OverviewEdit from './OverviewEdit';

class BusinessEdit extends Component {
    state = {
        tab: 'Overview',
        // validate: this.validateOverview()
    }
    tabs = [ 'Overview', 'Photos', 'Products', 'Services', 'Deals In']
    componentWillMount() {
        if (this.props.businessUrl) {
            Axios.instance.get(Axios.API.business.getBusinessUrl(this.props.businessUrl)).then(response => {
                if (response && response.data) {
                    this.setState({
                        business: response.data.data,
                        currUrl: `/business/${this.props.businessUrl}`
                    })
                }
            });
        }
    }

    changeTab = tab => {
        // this.tab.validate
        // add active class
        // set tab state to true for lazy loading api calls
        // integrate next button as well
        // 
    }
    render() {
        return (
            <div className="business_container">
                <div className='card-container'>
                    {this.state.business ?
                        <React.Fragment>
                            <div className='business_edit_tabs'>
                               {
                                   this.tabs.map((tab, index) => 
                                       <span onClick={this.changeTab(tab)} key={index}>{tab}</span>
                                   )
                               }
                            </div>
                            <OverviewEdit tab={this.state.tab} />
                            {/* <EditForm >
                                <EditForm.Page>
                                    <BasicInformation />
                                </EditForm.Page>
                                <EditForm.Page>
                                    <AddPhotos />
                                </EditForm.Page>
                                <EditForm.Page>
                                    <ProductServices />
                                </EditForm.Page>
                                <EditForm.Page>
                                    <DealsIn />
                                </EditForm.Page>
                            </EditForm> */}
                        </React.Fragment>
                        : <Spinner />
                    } </div>
            </div>

        )
    }

}


export default BusinessEdit;
