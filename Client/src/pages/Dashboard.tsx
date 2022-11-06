import React from 'react'
import DashboardModal from '../components/Dashboard/DashboardModal'
import NavBar from '../components/NavBar/NavBar'
import '../pages/Dashboard.scss'

const Dashboard = () => {
  return (
    <div>
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <div>
        <DashboardModal></DashboardModal>
      </div>
    </div>
  )
}

export default Dashboard