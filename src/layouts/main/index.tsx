import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import './index.css'

export default function DashboardLayout() {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="main-page--content">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
