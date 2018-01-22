import * as React from 'react';
import './Editor.css';

export interface Props {
  onMouseChange(event: React.FormEvent<HTMLElement>): void;
  setEditor(element: HTMLDivElement): void;
}

export default function Editor({onMouseChange, setEditor}: Props) {
  return (
    <div 
      className="Editor" 
      contentEditable={true} 
      onMouseDown={onMouseChange}
      onMouseUp={onMouseChange}
      ref={setEditor}
    />
  );
}
