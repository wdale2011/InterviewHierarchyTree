import React from 'react';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jeff',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Head;
