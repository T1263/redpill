import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <Layout>
      <h1>App</h1>
    </Layout>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
