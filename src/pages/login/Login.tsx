/*
 * Created Date: 2022-06-20 04:16:26
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-20 04:36:41
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useEffect, useState } from 'react'
import logo from '@/assets/logo.svg'

function Login() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log(import.meta.env)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default Login
