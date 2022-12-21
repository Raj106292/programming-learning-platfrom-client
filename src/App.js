import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/router';

function App() {
  return (
    <div style={{maxWidth: '1280px', margin: '0px auto'}}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
