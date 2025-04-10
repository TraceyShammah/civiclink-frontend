import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/HeaderAndPading'
import { HomePage } from './pages/HomePage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route path="/" element={< HomePage/>} />

        {/* <Route path="/dashboard" index element={<DashboardPage />} /> */}
        {/* <Route path="/dashboard/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/dashboard/settings" element={<SettingPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
