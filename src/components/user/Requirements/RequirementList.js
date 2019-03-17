import React, { Component } from "react";
import Img from "react-image";
import "./requirement.css";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import Axios from "../../../services/Axios";
class RequirementList extends Component {
  state = {
    showCloseForm: false
  };
  closeRequest = e => {
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
        this.setState({showCloseForm: true})
    }
  };
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
              {item.businesses_possible_connection_count} possible connections
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
            {this.state.showCloseForm ? (
              <Dropdown
                content={this.state.closeReasons.map((reason, index) => (
                  <div key={index}>
                    <input type="checkbox" value={reason.id} />
                    {reason.reason_text}
                  </div>
                ))}
              />
            ) : null}

            <span>{item.closed_at ? <span>closed</span> : null}</span>
          </div>
        </div>
      ))
    ) : (
      <div>no items found</div>
    );
  }
}

export default RequirementList;
