import * as React from 'react';
import { Editor, Toolbar } from './components';
import './RichTextEditor.css';

class RichTextEditor extends React.PureComponent {
  render() {
    return (
      <div className="Richtexteditor">
        <Toolbar />
        <Editor />
      </div>  
    );
  }
}

export default RichTextEditor;