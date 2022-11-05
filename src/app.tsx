import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './components/Data';
import Layout from './components/Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <Layout>
      <Data />
    </Layout>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
