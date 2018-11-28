import React, { Component } from 'react';

class Tabs extends Component {
    displayName = 'Tabs'
    state = {
        selected: this.props.selected
    }
    getDefaultProps() {
        return {
            selected: 0
        };
    }
    getInitialState() {
        return {
            selected: this.props.selected
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }
    handleClick(index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    }
    _renderTitles() {
        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <li key={index}>
                    <a href="#"
                        className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </a>
                </li>
            );
        }
        return (
            <ul className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    }
    _renderContent() {
        return (
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        );
    }
    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </div>
        );
    }
};

export default Tabs;