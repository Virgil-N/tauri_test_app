import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login/Login'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.TAURI_BASE_URL}>
      <Routes>
        <Route index element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
