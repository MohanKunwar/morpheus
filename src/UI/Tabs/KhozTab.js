import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KhozTab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { title, onClick } = this.props;
    onClick(title);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        title,
        icon
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === title) {
      className += ' tab-list-active';
    }

    return (
      <li 
        className={className}
        onClick={onClick}
      >
        <img className='khoz_tab_icon' src={require(`../../assets/icons/${icon}`)} alt={`${title} icon`} />
        {title}
      </li>
    );
  }
}


export default KhozTab;