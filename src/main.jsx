import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import TechnicalReportsPage from './TechnicalReportsPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/technical-reports" element={<TechnicalReportsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

