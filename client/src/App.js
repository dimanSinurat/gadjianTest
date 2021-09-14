import React from 'react'
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Dashboard, Personnel, DailyAttendance } from './pages';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen md:flex">
        <Sidebar />
        {/* Content */}
        <div className="bg-gray-100 flex-1 p-10">
          <Switch>
            <Route exact path="/home">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Personnel />
            </Route>
            <Route exact path="/attendance">
              <DailyAttendance />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  )
}
