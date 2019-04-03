import React, { Component } from 'react';
import PropTypes from 'prop-types';

import KhozTab from './KhozTab';
import './KhozTabs.css'
class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }


    state = {
        activeTab: this.props.children[0].props.title,
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { title, icon } = child.props;

                        return (
                            <KhozTab
                                activeTab={activeTab}
                                key={title}
                                title={title}
                                icon={icon}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.title !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;