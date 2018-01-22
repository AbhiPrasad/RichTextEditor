import * as React from 'react';
import Button from 'antd/lib/button';
import './Toolbar.css';

export interface Props {
  linkDisabled: boolean;
  onBoldClick(): void;
  onItalicClick(): void;
  onLinkClick?(): void;
}

export default function Toolbar({linkDisabled, onBoldClick, onItalicClick, onLinkClick}: Props) {
  return (
    <div className="Toolbar">
      <Button.Group>
        <Button 
          onClick={onBoldClick}
        > 
          B
        </Button>
        <Button 
          onClick={onItalicClick}
        > 
          I
        </Button>
        <Button 
          onClick={onLinkClick}
          disabled={linkDisabled}
        > 
          Link
        </Button>
      </Button.Group>
    </div>
  );
}
