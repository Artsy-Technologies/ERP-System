import React from 'react'
import Header from '../common/header/Header'
import Sidebar from '../common/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboardpage() {
  return (
    <main style={{ width: "100vw" , display:"flex" , justifyContent:"space-between" }} >
      <Sidebar />
      <section style={{ width: "100%" }} >
        <Header />
        <Outlet />
      </section>
    </main>
  )
}
