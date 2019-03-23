import React, { Component } from 'react';

export default class FeatureCard extends Component {

    render() {
        return (
             <a href="#" className="card text-center">
                <h5 className="card-title">{this.props.feature}</h5>
             </a>
        );
    }
};
