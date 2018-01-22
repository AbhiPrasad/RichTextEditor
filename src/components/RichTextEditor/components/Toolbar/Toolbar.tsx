import * as React from 'react';
import './Toolbar.css';

export interface Props {
  onBoldClick(): void;
  onItalicClick(): void;
  onLinkClick?(): void;
}

export default function Toolbar({onBoldClick, onItalicClick, onLinkClick}: Props) {
  return (
    <div className="Toolbar">
      <button 
        type="button"
        onClick={onBoldClick}
      > 
        B
      </button>
      <button 
        type="button"
        onClick={onItalicClick}
      > 
        I
      </button>
      <button 
        type="button"
        onClick={onLinkClick}
      > 
        Link
      </button>
    </div>
  );
}
