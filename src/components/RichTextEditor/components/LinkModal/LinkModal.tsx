import * as React from 'react';
import { Input, Modal, Button } from 'antd';

export interface Props {
  visible: boolean;
  url: string;
  onUrlChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onClose(): void;
  onRemoveLink(): void;
  onInsertLink(): void;
}

export default function LinkModal({visible, url, onUrlChange, onClose, onRemoveLink, onInsertLink}: Props) {
  return (
    <Modal 
      visible={visible}
      onCancel={onClose}
      closable={true}
      footer={[
        <Button 
          key="Remove" 
          type="danger" 
          onClick={onRemoveLink}
        >
          Remove Link
        </Button>,
        <Button key="Cancel" onClick={onClose}>Cancel</Button>,
        <Button 
          key="Insert" 
          type="primary" 
          onClick={onInsertLink}
          disabled={url === ''}
        >
          Insert Link
        </Button>,
      ]}
    >
      <Input 
        type="text" 
        onChange={onUrlChange} 
        value={url} 
        placeholder="Insert url"
        style={{ width: 450 }}
      />
    </Modal>
  );
}
