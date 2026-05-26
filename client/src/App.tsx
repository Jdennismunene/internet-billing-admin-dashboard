import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Payments from './components/Payments'
import Packages from './components/Packages'
import Reports from './components/Reports'
import Notification from './components/Notification'
import Support_ticket from './components/Support_ticket'

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    <main className={`flex-1 p-4 transition-all duration-300 ${
          isOpen ? "ml-20 md:ml-64" : "ml-20 md:ml-24"
        }`}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/reports" element={<Reports />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path='/support' element={<Support_ticket />} />
    </Routes>
    </main>
    </>
  )
}

export default App