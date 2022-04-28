import { Navigate, useRoutes } from 'react-router-dom'
// layouts
import MainLayout from 'src/layouts/main'
import MainPage from 'src/pages/MainPage'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '*', element: <Navigate to="/" /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ])
}
