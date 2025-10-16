import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import './styles/theme.css';

/** Redux Store */
import store from './redux/store';
import { Provider } from 'react-redux';

/** Theme Context */
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </Provider>
);
