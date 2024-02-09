import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import '@fortawesome/fontawesome-free/css/all.css';
import { GlobalProvider } from './GlobalContext';

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <GlobalProvider>
      <Root />
    </GlobalProvider>,
  );
