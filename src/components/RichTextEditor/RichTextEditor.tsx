import * as React from 'react';
import { Editor, Toolbar } from './components';
import './RichTextEditor.css';

class RichTextEditor extends React.PureComponent {
  render() {
    return (
      <div className="Richtexteditor">
        <Toolbar />
        <Editor 
          onChange={this.handleInputChange}
        />
      </div>  
    );
  }

  private handleInputChange = (event: React.FormEvent<HTMLElement>) => {
    this.setState({
      html: event.currentTarget.innerHTML ? event.currentTarget.innerHTML : '',
    });
  }
}

export default RichTextEditor;
