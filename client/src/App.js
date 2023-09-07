import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <AppRoutes />
    </div>
  );
}

export default App;