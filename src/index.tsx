import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RichTextEditor from './components/RichTextEditor/RichTextEditor';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RichTextEditor />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
