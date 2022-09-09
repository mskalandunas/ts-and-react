import { createRoot } from 'react-dom/client';
import { todoClient } from './api';

interface AppProps {
  name: string;
}

todoClient.get({
  success: console.log,
  fail: console.error
});

const App = ({ name }: AppProps) => (
  <h1>{name}</h1>
);

createRoot(document.getElementById('ReactAppRoot') as Element).render(<App name="Hello World" />);