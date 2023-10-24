import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Campaign from './Pages/Campaign/Campaign'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard/>,
    },
    {
      path: '/campaign',
      element: <Campaign/>,
    },
  ]);

  return (
    <div className='App'>
      <section className='nav-item'>
        <Navbar />
      </section>

      <section className='side-item'>
        <Sidebar />
      </section>

      <section className='main-item'>
        <RouterProvider router={router} /> 
      </section >
    </div>
  )

}

export default App
