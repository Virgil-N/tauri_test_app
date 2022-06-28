/*
 * Created Date: 2022-06-20 04:16:26
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-28 10:57:37
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useRef, useEffect, useState, SetStateAction } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  Stack,
  Input,
  Button,
  Center,
  Heading,
  InputGroup,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  InputLeftElement,
} from '@chakra-ui/react'
import { TbLogin, TbUser, TbLock } from 'react-icons/tb'
import { styled } from '@stitches/react'

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

function Login() {
  const isMountedRef = useIsMountedRef()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [nameErrorMsg, setNameErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [isNameError, setIsNameError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const handleInputChange =
    (e: { target: { value: SetStateAction<string> } }, item: string) => {
      if (item === 'name') {
        setName(e.target.value)
        setIsNameError(true)
        if (new RegExp(/[`~!@#$%^&*()+=<>?:"{},./;'[\]|\\-]/).test(e.target.value.toString())) {
          setNameErrorMsg('用户名包含非法字符')
        } else if (e.target.value.length < 3) {
          setNameErrorMsg('用户名字符个数不少于三位')
        } else if (e.target.value.length > 12) {
          setNameErrorMsg('用户名字符个数不超过十二')
        } else {
          setNameErrorMsg('')
          setIsNameError(false)
        }
      } else if (item === 'password') {
        setPassword(e.target.value)
        setIsPasswordError(true)
        if (new RegExp(/[`~!@#$%^&*()+=<>?:"{},./;'[\]|\\-]/).test(e.target.value.toString())) {
          setPasswordErrorMsg('密码包含非法字符')
        } else if (e.target.value.length < 6) {
          setPasswordErrorMsg('密码字符个数不少于六位')
        } else if (e.target.value.length > 18) {
          setPasswordErrorMsg('密码字符个数不超过十八')
        } else {
          setPasswordErrorMsg('')
          setIsPasswordError(false)
        }
      } else {
        // 
      }
    }
  
  const userLogin = () => {
    console.log(name, password)
    navigate('/video')
  }

  useEffect(() => {
    if (isMountedRef.current) {
      // console.log(import.meta.env)
    }
  }, [
    isMountedRef
  ])

  return (
    !isNameError ? <Navigate to="/video" replace={true} /> :
    <Center
      w='100%'
      h='100%'
      backgroundPosition='center'
      backgroundSize='100% 100%'
      backgroundRepeat='no-repeat'
      backgroundImage={new URL('/src/assets/login_bg.jpg', import.meta.url).href}
    >
      <Flex
        bg='tomato'
        w='50VW'
        h='60VH'
        minW='30rem'
        minH='24rem'
        maxW='32rem'
        maxH='26rem'
        color='white'
        direction='column'
        boxShadow='dark-lg'
        bgGradient='linear(to-br, purple.400, green.200)'
        p={8}
      >
        <Box h='5rem' flexShrink='0'>
          <Heading
            h='100%'
            fontSize='1.6rem'
            lineHeight='5rem'
            textAlign='center'
          >
          Tauri Chakra-ui Vite React App
        </Heading>
        </Box>
        <Box
          flexGrow='1'
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Flex alignItems='baseline'>
            <Text w='6rem' textAlign='right' mr='2rem'>用户名</Text>
            <FormControl mr='2rem' isInvalid={isNameError}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<TbUser color='gray.300' />}
                />
                <Input
                  value={name}
                  onChange={(e) => handleInputChange(e, 'name')}
                />
              </InputGroup>
              {!isNameError ? (
                <FormHelperText fontSize='0.6rem'>
                   用户名字符个数三到十二位且不能包含非法字符
                </FormHelperText>
              ) : (
                <FormErrorMessage fontSize='0.6rem'>
                  {nameErrorMsg}
                </FormErrorMessage>
              )}
            </FormControl>
            
          </Flex>
          <Flex alignItems='baseline' mt='1rem'>
            <Text w='6rem' textAlign='right' mr='2rem'>密码</Text>
            <FormControl mr='2rem' isInvalid={isPasswordError}>
              <InputGroup mr='2rem'>
                <InputLeftElement
                  pointerEvents='none'
                  children={<TbLock color='gray.300' />}
                />
                <Input
                  value={password}
                  onChange={(e) => handleInputChange(e, 'password')}
                  type='password'
                />
              </InputGroup>
              {!isPasswordError ? (
                <FormHelperText fontSize='0.6rem'>
                   密码字符个数六到十八位且不能包含非法字符
                </FormHelperText>
              ) : (
                <FormErrorMessage fontSize='0.6rem'>
                  {passwordErrorMsg}
                </FormErrorMessage>
              )}
            </FormControl>
          </Flex>
        </Box>
        <Box h='4rem' flexShrink='0'>
          <Stack
            h='100%'
            direction='row'
            display='flex'
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            spacing={4}
          >
            <Button colorScheme='teal' variant='outline'>
              注册
            </Button>
            <Button
              leftIcon={<TbLogin />}
              colorScheme='teal'
              variant='solid'
              onClick={userLogin}
            >
              登录
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Center>
  )
}

export default Login
