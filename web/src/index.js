// Imports
import React from 'react'
import { RecoilRoot as GlobalState } from 'recoil'
import { createRoot } from 'react-dom/client';

// App imports
import Layout from './common/Layout.js'

// Root
const App = () => (
  <React.StrictMode>
    <GlobalState>
      <Layout />
    </GlobalState>
  </React.StrictMode>
  );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
