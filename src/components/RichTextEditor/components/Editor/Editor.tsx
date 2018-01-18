import * as React from 'react';
import './Editor.css';

class Editor extends React.PureComponent {
  render() {
    return (
      <div className="Editor" contentEditable={true}>
        Hey
      </div>
    );
  }
}

export default Editor;