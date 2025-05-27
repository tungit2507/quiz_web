import { useRoutes } from 'react-router-dom';
import routes from './routers/index';
import './App.css';

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
