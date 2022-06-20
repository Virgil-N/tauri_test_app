/*
 * Created Date: 2022-06-20 04:16:26
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-20 09:43:14
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
    <div className='login-wrap'>
      <div className='card'>
        <div className='head'>

        </div>
        <div className='body'>

        </div>
      </div>
    </div>
  )
}

export default Login
