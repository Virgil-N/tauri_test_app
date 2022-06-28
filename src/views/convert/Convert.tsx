/*
 * Created Date: 2022-06-28 10:59:35
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-28 11:24:41
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useRef, useEffect, useState, SetStateAction } from 'react'
import {
  Box,
  Text,
  Flex,
  Stack,
  Input,
  Center,
  Button,
  Heading,
  InputGroup,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  InputLeftElement,
} from '@chakra-ui/react'

function Convert() {
  const [url, setUrl] = useState('')

  const handleInputUrl = (e: any) => {
    console.log(e.target.value)
    setUrl(e.target.value)
  }

  const startDownload = () => {
    console.log(url)
  }

  return (
    <Flex
      flexGrow='1'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='stretch'
    >
    </Flex>
  )
}

export default Convert