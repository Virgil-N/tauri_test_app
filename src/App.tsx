import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { globalCss } from '@stitches/react'
import Login from '@/pages/login/Login'

function App() {

  const globalStyles = globalCss({
    '*': {
      margin: 0,
      padding: 0,
    },
    'html, body': {
      width: '100VW',
      height: '100VH',
    },
    '#root': {
      width: '100VW',
      height: '100VH',
    },
  })

  globalStyles()

  return (
    <BrowserRouter basename={import.meta.env.TAURI_BASE_URL}>
      <Routes>
        <Route index element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
