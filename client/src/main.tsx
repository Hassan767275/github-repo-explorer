import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import PageNotFound from './components/PageNotFound.tsx'
import Login from './components/Login.tsx'
import Registration from './components/Registration.tsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './components/AuthProvider.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Registration/> },
  { path: "*", element: <PageNotFound/> }
])


createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ToastContainer />
    <RouterProvider router={router}/>
  </AuthProvider>,
)
