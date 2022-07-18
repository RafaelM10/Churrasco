import { AuthProvider } from 'contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Paths from 'routes/routes';

import 'styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Paths />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
