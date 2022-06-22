/*
 * Created Date: 2022-06-20 04:16:26
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-22 04:54:11
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useEffect, useState, useRef } from 'react'
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import logo from '@/assets/logo.svg'

import _JSXStyle from "styled-jsx/style";


function Login() {
  const [count, setCount] = useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  useEffect(() => {
    // console.log(import.meta.env)
  }, [])

  return (
    <div className='login_wrap'>
      <div className='card'>
        <div className='head'>
          <p>Cargo Tauri Vite React</p>
        </div>
        <div className='body'>
        <Container maxW='md' minH='100%' bg='blue.600' color='white'>
          <FormControl>
            <FormLabel htmlFor='用户名'>用户名</FormLabel>
              <Input></Input>
          </FormControl>
        </Container>
          
        </div>
      </div>
      <style jsx>{`
        .login_wrap {
          width: 100VW;
          height: 100VH;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: rgba(148, 85, 221, 0.8);

          .card {
            width: 50VW;
            height: 60VH;
            max-width: 36rem;
            min-width: 28rem;
            min-height: 22rem;
            background-color: rgb(148, 85, 221);
          }

          .head {
            width: 100%;
            height: 5VH;
            min-height: 3rem;
            background-color: yellow;
          }
          
          .body {
            width: 100%;
            height: calc(100% - 5VH);
            background-color: orange;
          }
        }
      `}</style>
    </div>
  )
}

export default Login
