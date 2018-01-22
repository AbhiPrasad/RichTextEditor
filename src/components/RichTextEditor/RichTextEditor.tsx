import * as React from 'react';
import { Editor, Toolbar, LinkModal } from './components';
import './RichTextEditor.css';
import 'antd/dist/antd.css';

interface State {
  modalVisible: boolean;
  url: string;
  anchorOffset: number;
  focusOffset: number;
  anchorNode: Node | null;
  focusNode: Node | null;
}

export interface Props {}

class RichTextEditor extends React.PureComponent<Props, State> {
  state: State = {
    modalVisible: false,
    url: '',
    anchorOffset: 0,
    focusOffset: 0,
    anchorNode: null,
    focusNode: null,
  };

  private Editor: HTMLDivElement | null = null;

  render() {
    const {modalVisible, url, anchorOffset, focusOffset} = this.state;
    return (
      <div className="Richtexteditor">
        <Toolbar 
          onBoldClick={this.handleBoldClick}
          onItalicClick={this.handleItalicClick}
          onLinkClick={this.handleLinkClick}
          linkDisabled={anchorOffset === focusOffset}
        />
        <Editor 
          setEditor={this.handleSetEditor}
          onMouseChange={this.handleMouseChange}
        />
        <LinkModal 
          visible={modalVisible}
          url={url}
          onUrlChange={this.handleUrlChange}
          onClose={this.handleCloseModal}
          onRemoveLink={this.handleRemoveLink}
          onInsertLink={this.handleInsertLink}
        />
      </div>
    );
  }

  private handleMouseChange = (event: React.FormEvent<HTMLElement>) => {
    if (window.getSelection().anchorOffset !== window.getSelection().focusOffset) {
      this.setState({
        anchorOffset: window.getSelection().anchorOffset,
        focusOffset: window.getSelection().focusOffset,
        anchorNode: window.getSelection().anchorNode,
        focusNode: window.getSelection().focusNode,
      });
    }
  }

  private handleSetEditor = (element: HTMLDivElement) => {
    this.Editor = element;
  }

  private handleLinkClick = () => {
    this.setState({modalVisible: true});
  }

  private handleCloseModal = () => {
    this.setState({modalVisible: false});
  }

  private handleInsertLink = () => {
    const {anchorNode, focusNode, anchorOffset, focusOffset} = this.state;
    
    this.Editor!.focus();
    var range = document.createRange();

    // Anchor is where user begins selection and focus is where user ends selection
    if (anchorOffset > focusOffset) {
      range.setStart(focusNode!, focusOffset);
      range.setEnd(anchorNode!, anchorOffset);
    } else {
      range.setStart(anchorNode!, anchorOffset);
      range.setEnd(focusNode!, focusOffset);
    }
    
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand('createLink', false, this.state.url);
    this.setState({modalVisible: false, url: ''});
  }

  private handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({url: event.currentTarget.value});
  }

  private handleRemoveLink = () => {
    document.execCommand('unlink');
    this.handleCloseModal();
  }

  private handleItalicClick = () => {
    document.execCommand('italic', false);
  }

  private handleBoldClick = () => {
    document.execCommand('bold', false);
  }
}

export default RichTextEditor;
