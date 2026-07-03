import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import PageNotFound from './components/PageNotFound.tsx'
import Login from './components/Login.tsx'
import Registration from './components/Registration.tsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Registration/> },
  { path: "*", element: <PageNotFound/> }
])

createRoot(document.getElementById('root')!).render(
  <>
  <ToastContainer />
    <RouterProvider router={router}/>
  </>,
)
