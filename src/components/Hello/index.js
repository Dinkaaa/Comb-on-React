import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export default class Hello extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    static defaultProps = {
        name: 'Visitor'
    };

    render() {
        return <h1 className="hello-container">
            Welcome, {this.props.name}, to SagebrushCRM
        </h1>
    }
};