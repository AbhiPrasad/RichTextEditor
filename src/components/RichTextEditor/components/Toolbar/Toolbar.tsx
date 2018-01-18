import * as React from 'react';
import './Toolbar.css';

class Toolbar extends React.PureComponent {
  render() {
    return (
      <div className="Toolbar">
        <button> B </button>
        <button> I </button>
        <button> Link </button>
      </div>
    );
  }
}

export default Toolbar;
