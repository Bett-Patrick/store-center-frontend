import React from 'react'
import '../../../App.css'
import '../../../App.jsx'
import OurClients from '../OurClients.jsx'
import CurrentClients from '../CurrentClients.jsx'
import DefaultedClients from '../DefaultedClients.jsx'
import PendingDeliveries from '../PendingDeliveries.jsx'
import { NavLink } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='flex flex-col'>
      <section className=''>
        <div className='flex flex-row gap-5 justify-start items-center text-slate-200 font-extrabold bg-slate-700'>
          <NavLink className='bg-slate-900 py-5 px-2'>All Clients</NavLink>
          <NavLink className='bg-slate-900 py-5 px-2'>Current Clients</NavLink>
          <NavLink className='bg-slate-900 py-5 px-2'>Defaulted Clients</NavLink>
          <NavLink className='bg-slate-900 py-5 px-2'>Pending Deliveries</NavLink>
          <NavLink to="/add-unit" className='bg-slate-900 py-5 px-2'>Add New Unit</NavLink>
        </div>
      </section>

      <CurrentClients />
      <DefaultedClients />
      <PendingDeliveries />
      <OurClients/> 
    </div>
  )
}

export default AdminDashboard
