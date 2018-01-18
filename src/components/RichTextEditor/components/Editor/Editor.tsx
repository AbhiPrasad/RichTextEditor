import * as React from 'react';
import './Editor.css';

export interface State {
  html: string | null;
}

export interface Props {
  onChange(event: React.FormEvent<HTMLElement>): void;
}

class Editor extends React.PureComponent<Props, State> {
  state: State = {
    html: null,
  };
  
  render() {
    const {onChange} = this.props;
    const {html} = this.state;
    const innerHtml = {__html: html ? html : ''};

    return (
      <div 
        className="Editor" 
        contentEditable={true} 
        onInput={onChange}
        dangerouslySetInnerHTML={innerHtml}
      />
    );
  }
}

export default Editor;
