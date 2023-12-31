import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// jsx is internally converted to React.createElement
// ReactDOM.render(React.createElement(App), document.getElementById('root'));

  // React 18 and above
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
root.render(React.createElement(App))
// root.hydrate(React.createElement(App))

  