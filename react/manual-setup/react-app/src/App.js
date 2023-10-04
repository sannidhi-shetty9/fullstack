import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }

// App component without jsx
class App extends React.Component {
    render() {
      return React.createElement('div', null, 'Hello, React!!!');
    }
  }

export default App;
