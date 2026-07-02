import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import PageNotFound from './components/PageNotFound.tsx'
import Login from './components/Login.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "*", element: <PageNotFound/> },
  { path: "/login", element: <Login/> },
  
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
