import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import PageNotFound from './components/PageNotFound.tsx'

const router = createBrowserRouter([
  { path:"/", element: <App/> },
  { path:"*", element: <PageNotFound/> },
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
