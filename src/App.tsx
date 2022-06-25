import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { globalCss } from '@stitches/react'
import Login from '@/pages/login/Login'
import Layout from '@/layout/Layout'
import Home from '@/views/home/Home'
import { invoke } from '@tauri-apps/api/tauri'

function App() {

  // 等tauri版本更新修复这个bug
  // const invoke = window.__TAURI__.invoke

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

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log(invoke);
      const close_splashscreen_timeout = setTimeout(() => {
        invoke('close_splashscreen')
        window.clearInterval(close_splashscreen_timeout)
      }, 3000)
    })
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.TAURI_BASE_URL}>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
