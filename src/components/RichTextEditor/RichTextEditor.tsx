import * as React from 'react';
import { Editor, Toolbar } from './components';
import './RichTextEditor.css';

interface State {
  html: string | null;
}

export interface Props {}

class RichTextEditor extends React.PureComponent<Props, State> {
  state: State = {
    html: null,
  };

  private Editor: HTMLDivElement | null = null;

  render() {
    // const {html} = this.state;
    return (
      <div className="Richtexteditor">
        <Toolbar 
          onBoldClick={this.handleBoldClick}
          onItalicClick={this.handleItalicClick}
        />
        <Editor 
          onChange={this.handleInputChange}
          // html={html}
          isBold={false}
        />
      </div>  
    );
  }

  private handleItalicClick = () => {
    document.execCommand('italic', false);
  }

  private handleBoldClick = () => {
    document.execCommand('bold', false);
  }

  private handleInputChange = (event: React.FormEvent<HTMLElement>) => {
    // tslint:disable-next-line
    console.log(event.currentTarget.innerText, this.Editor);
    this.setState({
      html: event.currentTarget.innerText ? event.currentTarget.innerText : null,
    });
  }
}

export default RichTextEditor;
