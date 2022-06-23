/*
 * Created Date: 2022-06-20 04:16:26
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-23 04:52:50
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useEffect, useState, useRef } from 'react'
import {
  Center,
  Flex,
  Box,
  Text,
  Heading,
  Stack,
  InputGroup,
  InputLeftElement,
  Spacer,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from '@chakra-ui/react'
import { TbLogin, TbUser, TbLock } from 'react-icons/tb'
import { useDisclosure } from '@chakra-ui/react'
import { styled } from '@stitches/react'
import logo from '@/assets/logo.svg'


function Login() {
  const [count, setCount] = useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  const Div = styled('div', {
    '&.login_wrap': {
      width: '100VW',
      height: '100VH',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(148, 85, 221, 0.8)',
    },

    '.card': {
      width: '50VW',
      height: '60VH',
      maxWidth: '36rem',
      minWidth: '28rem',
      minHeight: '22rem',
      backgroundColor: 'rgb(148, 85, 221)',
    },

    '.head': {
      width: '100%',
      height: '3rem',
      lineHeight: '3rem',
      backgroundColor: 'yellow',

      'p': {
        fontSize: '1.8rem',
        fontWeight: 500,
        textAlign: 'center',
      },
    },
    
    '.body': {
      width: '100%',
      height: 'calc(100% - 5VH)',
      backgroundColor: 'orange',
    },
  })


  useEffect(() => {
    // console.log(import.meta.env)
  }, [])

  return (
    // <Div className='login_wrap'>
    //   <div className='card'>
    //     <div className='head'>
    //       <p>Cargo Tauri Vite React</p>
    //     </div>
    //     <div className='body'>
    //     <Container maxW='md' minH='100%' bg='blue.600' color='white'>
    //       <FormControl>
    //         <FormLabel htmlFor='用户名'>用户名</FormLabel>
    //           <Input></Input>
    //       </FormControl>
    //     </Container>
    //     </div>
    //   </div>
    // </Div>
    <Center
      w='100%'
      h='100%'
      backgroundImage="url('/test_app/assets/login_bg.jpg')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    >
      <Flex
        bg='tomato'
        w='50VW'
        h='60VH'
        minW='36rem'
        minH='24rem'
        maxW='38rem'
        maxH='26rem'
        color='white'
        direction='column'
        p={8}
      >
        <Box h='5rem' flexShrink='0'>
          <Heading
            h='100%'
            size='lg'
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
          <Flex alignItems='center'>
            <Text w='6rem' textAlign='right' mr='2rem'>用户名</Text>
            <InputGroup mr='2rem'>
              <InputLeftElement
                pointerEvents='none'
                children={<TbUser color='gray.300' />}
              />
              <Input />
            </InputGroup>
          </Flex>
          <Flex alignItems='center' mt='2rem'>
            <Text w='6rem' textAlign='right' mr='2rem'>密码</Text>
            <InputGroup mr='2rem'>
              <InputLeftElement
                pointerEvents='none'
                children={<TbLock color='gray.300' />}
              />
              <Input type='password' />
            </InputGroup>
          </Flex>
        </Box>
        <Box h='4rem' flexShrink='0'>
          <Stack
            direction='row'
            display='flex'
            flexDirection='row'
            justifyContent='center'
            spacing={4}
          >
            <Button leftIcon={<TbLogin />} colorScheme='teal' variant='outline'>
              注册
            </Button>
            <Button leftIcon={<TbLogin />} colorScheme='teal' variant='solid'>
              登录
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Center>
  )
}

export default Login
