import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

const Root = () => (
  // <Provider store={store}>
  <Router>
    <App />
  </Router>
  // </Provider>
);

root.render(<Root />);
