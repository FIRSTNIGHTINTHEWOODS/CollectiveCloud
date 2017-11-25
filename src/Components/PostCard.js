import React, { Component } from 'react';

export default class PostCard extends Component {
  render() {
    return (

        <div className="post card-panel teal lighten-2 col s12">
            {this.props.children}
        </div>
    )
  }
}
