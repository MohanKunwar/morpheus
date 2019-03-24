import React, { Component } from "react";
import Img from "react-image";
import { withRouter } from 'react-router-dom';
import "./requirement.css";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import Axios from "../../../services/Axios";
class RequirementList extends Component {
  item
  otherReason
  state = {
    showCloseForm: false,
    closeReason: null,
    otherReason: ''
  };
  getPossibleConnections = id => {
    Axios.authInstance.get(`/leads/${id}/businesses/possible-connection`).then(response => {
      console.log(response)
    })
  }
  closeRequest = (e, item) => {
    this.item = item
    e.preventDefault();
    if (!this.state.closeReasons) {
      Axios.instance
        .get(Axios.API.requirement.getCloseReasonsUrl)
        .then(response => {
          this.setState({
            closeReasons: response.data.data,
            showCloseForm: true
          });
        });
    } else {
      this.setState({ showCloseForm: true })
    }
  }
  closeReasonSelected = (e, reason) => {
    this.setState({closeReason: reason})
  }
  submitCloseForm = (e, itemId) => {
    let payload = {}
      if (this.state.closeReason.id === 4) {
        payload.lead_close_reason_other = this.otherReason
      }
      payload.close_reason_id = this.state.closeReason.id
      Axios.authInstance.post(Axios.API.requirement.closeRequirementUrl(itemId), payload).then(
        response => {
          if (response && response.status) {
            switch (response.status) {
              case 204: {
                this.props.history.push('/user/requirements/completed')
                break
              }
              default: {
                break
              }
            }
          }
        })
  }
  render() {
    return this.props.items && this.props.items.length > 0 ? (
      this.props.items.map((item, index) => (
        <div className="requirement-item" key={index}>
          <span className="require_title">{item.title}</span>
          <br />
          <span className="require_location">
            {item.created_at} &#124; {item.location ? item.location.name : null}
          </span>
          <br />
          <p className="require_dec">{item.description}</p>
          <div className="require_image">
            <Img src={item.attachment} alt={item.title} />
          </div>
          <br />
          <div className="requirement_bottom">
            <span className="require_count">
              {item.businesses_connected_count} connected &#124;{" "}
              <span onClick={e => this.getPossibleConnections(item.id)}>{item.businesses_possible_connection_count} possible connections</span>
            </span>
            <span className="approval_status">
              {item.status === "pending"
                ? "Approval Pending"
                : item.status === "approved"
                  ? "Approved"
                  : "Request Completed"}
            </span>
            {item.status === "approved" && !item.closed_at ? (
              <button
                className="close_request_btn"
                onClick={e => this.closeRequest(e, item)}
              >
                Close Request
              </button>
            ) : null}
            {
              this.state.showCloseForm && this.item === item
                ?
                  <Dropdown
                    content={
                      <React.Fragment>
                      {
                        this.state.closeReasons.map((reason, index) => (
                      <React.Fragment key={index}>
                        <input type='checkbox' 
                          onChange={e => this.closeReasonSelected(e, reason)} 
                          checked={this.state.closeReason ? this.state.closeReason.id===reason.id ? 'checked' : false : false} />
                        {
                          reason.reason_text !== 'I dont need this requirement anymore'
                          ? <span className='reason_text'>{reason.reason_text}</span>
                          : <input type='text' 
                              disabled={this.state.closeReason ? this.state.closeReason.id !== reason.id ? true : false : true} 
                              placeholder='Other reason' 
                              defaultValue={this.state.closeReason ? this.state.closeReason.id === reason.id ? this.state.otherReason : '' : ''} 
                              onChange={e => this.setState({otherReason: e.target.value})}/>
                        }
                      </React.Fragment>
                    ))}
                      <button type='submit' 
                        disabled={this.state.closeReason 
                          ? this.state.closeReason.id === 4  
                            ? this.state.otherReason
                              ? false
                              : true
                            : false
                          : true} 
                        onClick={e => this.submitCloseForm(e, item.id)}>Close Now</button>
                      </React.Fragment>
                    }
                  />
                  
                :
                null
            }

            <span>{item.closed_at ? <span>closed</span> : null}</span>
          </div>
        </div>
      ))
    ) : (
        <div>no items found</div>
      );
  }
}

export default withRouter(RequirementList);
