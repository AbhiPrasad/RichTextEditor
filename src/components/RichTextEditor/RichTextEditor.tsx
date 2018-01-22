import * as React from 'react';
import * as ReactModal from 'react-modal';
import { Editor, Toolbar } from './components';
import './RichTextEditor.css';

interface State {
  html: string | null;
  showModal: boolean;
  url: string;
  anchorOffset: number;
  focusOffset: number;
  anchorNode: Node | null;
  focusNode: Node | null;
}

export interface Props {}

class RichTextEditor extends React.PureComponent<Props, State> {
  state: State = {
    html: null,
    showModal: false,
    url: '',
    anchorOffset: 0,
    focusOffset: 0,
    anchorNode: null,
    focusNode: null,
  };

  private Editor: HTMLDivElement | null = null;

  render() {
    const {showModal, url} = this.state;
    return (
      <div className="Richtexteditor">
        <Toolbar 
          onBoldClick={this.handleBoldClick}
          onItalicClick={this.handleItalicClick}
          onLinkClick={this.handleLinkClick}
        />
        <Editor 
          setEditor={this.handleSetEditor}
          onMouseChange={this.handleMouseChange}
        />
        <ReactModal 
          isOpen={showModal}
          ariaHideApp={false}
        >
          <p>Insert url:</p>
          <input type="text" onChange={this.handleUrlChange} value={url}/>

          <button onClick={this.handleInsert} type="button"> Insert Link </button>
          <button onClick={this.handleRemove} type="button"> Remove Link </button>
        </ReactModal>
      </div>  
    );
  }

  private handleMouseChange = (event: React.FormEvent<HTMLElement>) => {
    this.setState({
      anchorOffset: window.getSelection().anchorOffset,
      focusOffset: window.getSelection().focusOffset,
      anchorNode: window.getSelection().anchorNode,
      focusNode: window.getSelection().focusNode,
    });
  }

  private handleSetEditor = (element: HTMLDivElement) => {
    this.Editor = element;
  }

  private handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({url: event.currentTarget.value});
  }

  private handleLinkClick = () => {
    this.setState({showModal: true});
  }

  private handleInsert = () => {
    const {anchorNode, focusNode, anchorOffset, focusOffset} = this.state;

    // tslint:disable-next-line
    console.log(this.Editor!.childElementCount);
    // tslint:disable-next-line
    console.log('anchor:', anchorOffset);
    // tslint:disable-next-line
    console.log('focus:', focusOffset);

    // Anchor is where user begins selection and focus is where user ends selection

    this.Editor!.focus();
    var range = document.createRange();
    range.setStart(anchorNode!, anchorOffset);
    range.setEnd(focusNode!, focusOffset);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand('createLink', false, this.state.url);
    this.setState({showModal: false, url: ''});
  }

  private handleRemove = () => {
    document.execCommand('unlink');
    this.setState({showModal: false, url: ''});
  }

  private handleItalicClick = () => {
    document.execCommand('italic', false);
  }

  private handleBoldClick = () => {
    document.execCommand('bold', false);
  }
}

export default RichTextEditor;
