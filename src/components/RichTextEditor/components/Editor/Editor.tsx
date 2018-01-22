import * as React from 'react';
import './Editor.css';

export interface Props {
  isBold: boolean;
  onChange(event: React.FormEvent<HTMLElement>): void;
  onKeyDown?(event: React.FormEvent<HTMLElement>): void;
  onKeyUp?(event: React.FormEvent<HTMLElement>): void;
  setEditor?(element: HTMLDivElement): void;
}

export default function Editor({onChange, onKeyDown, onKeyUp, setEditor}: Props) {
  return (
    <div 
      className="Editor" 
      contentEditable={true} 
      onInput={onChange}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      ref={setEditor}
    />
  );
}
