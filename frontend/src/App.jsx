// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PaperToVideo from './pages/PaperToVideo'
import PaperToPPT from './pages/PaperToPPT'
import Enterprise from './pages/Enterprise'
import AddAgent from './pages/AddAgent'
import Login from './pages/Login'
import Docs from './pages/Docs'
import Contact from './pages/Contact'
import UserDashboard from './pages/UserDashboard'
import MainLayout from './layout/MainLayout'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/paper-to-video" element={
          <MainLayout>
            <PaperToVideo />
          </MainLayout>
        } />
        <Route path="/paper-to-ppt" element={
          <MainLayout>
            <PaperToPPT />
          </MainLayout>
        } />
        <Route path="/enterprise" element={
          <MainLayout>
            <Enterprise />
          </MainLayout>
        } />
        <Route path="/docs" element={
          <MainLayout>
            <Docs />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <Contact />
          </MainLayout>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <MainLayout>
            <UserDashboard />
          </MainLayout>
        } />
        <Route path="/add-agent" element={
          <MainLayout>
            <AddAgent />
          </MainLayout>
        } />
      </Routes>
    </Router>
  )
}