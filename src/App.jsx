import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
