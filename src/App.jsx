import { useLocation, useRoutes } from 'react-router-dom';
import routes from './routers/index';
import './App.css';
import { useEffect, useState } from 'react';
import { PageLoader } from '@/components/PageLoader';

function App() {


  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [location])


  const element = useRoutes(routes);
  return <>
    <PageLoader isLoading={loading} />
    {element}
  </>;
}

export default App;
