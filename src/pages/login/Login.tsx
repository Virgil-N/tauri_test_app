/*
 * Created Date: 2022-06-20 04:16:26
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-21 05:38:52
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useEffect, useState, React } from 'react'
import {
  login_wrap,
  card
} from './login.css'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import logo from '@/assets/logo.svg'


function Login() {
  const [count, setCount] = useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  useEffect(() => {
    // console.log(import.meta.env)
  }, [])

  return (
    <div className={login_wrap}>
      <div className={card}>
        <div className='head'>
        
        </div>
        <div className='body'>
        <Button colorScheme='red' onClick={onOpen}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        </div>
      </div>
    </div>
  )
}

export default Login
