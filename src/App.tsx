import { useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { globalCss } from '@stitches/react'
import Login from '@/pages/login/Login'
import Layout from '@/layout/Layout'
import Home from '@/views/home/Home'
import Video from '@/views/video/Video'
import Queue from '@/views/queue/Queue'
import Convert from '@/views/convert/Convert'
import Settings from '@/views/settings/Settings'
import { invoke } from '@tauri-apps/api/tauri'

const useIsMountedRef = () => {
  const isMountedRef = useRef(false)
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false
    }
  })
  return isMountedRef
}

function App() {
  const isMountedRef = useIsMountedRef()
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
      fontSize: '1em',
    },
    '#root': {
      width: '100VW',
      height: '100VH',
    },
  })

  globalStyles()

  useEffect(() => {
    if (isMountedRef.current) {
      // const close_splashscreen_timeout = setTimeout(() => {
      //   invoke('close_splashscreen')
      //   window.clearInterval(close_splashscreen_timeout)
      // }, 3000)
    }
  }, [
    isMountedRef
  ])

  return (
    <BrowserRouter basename={import.meta.env.TAURI_BASE_URL}>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route element={<Layout />}>
          {/* <Route path='/home' element={<Home />}></Route> */}
          <Route path='/video' element={<Video />}></Route>
          <Route path='/queue' element={<Queue />}></Route>
          <Route path='/convert' element={<Convert />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
