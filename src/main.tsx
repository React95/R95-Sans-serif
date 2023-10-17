import ReactDOM from 'react-dom/client';
import { ClippyProvider, AGENTS } from '@react95/clippy';
import { ThemeProvider, GlobalStyle } from '@react95/core';
import App from './App.tsx';

import './R95SansSerif.css';

import './index.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).CLIPPY_CDN =
  'https://cdn.jsdelivr.net/gh/pi0/clippyjs/assets/agents/';

const availableAgents = Object.keys(AGENTS);
const randomIndex = Math.ceil(Math.random() * availableAgents.length);
const agent = AGENTS[availableAgents[randomIndex]];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ClippyProvider agentName={agent}>
      <GlobalStyle />
      <App />
    </ClippyProvider>
  </ThemeProvider>,
);
