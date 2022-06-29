/*
 * Created Date: 2022-06-27 03:03:23
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-29 03:00:28
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
  InputRightAddon,
  FormErrorMessage,
  InputLeftElement,
} from '@chakra-ui/react'
import { invoke, dialog, fs } from '@tauri-apps/api'

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

function Video() {
  const isMountedRef = useIsMountedRef()
  const [url, setUrl] = useState('')
  const [currentPath, setCurrentPath] = useState('')
  const [availableSpace, setAvailableSpace] = useState(0)

  const handleInputUrl = (e: any) => {
    console.log(e.target.value)
    setUrl(e.target.value)
  }

  const selectFolder = async () => {
    const selected = await dialog.open({directory: true, multiple: false})
    if (selected != null) {
      setCurrentPath(selected.toString())
      showFreeSpace(selected.toString())
    }
  }

  const showFreeSpace = async (path: String) => {
    const freeSpace = await invoke('disk_free_size', {path}) as SetStateAction<number>
    setAvailableSpace(freeSpace)
  }

  const startDownload = () => {
    console.log(url)
  }

  useEffect(() => {
    if (isMountedRef.current) {
      showFreeSpace(currentPath)
    }
  }, [
    isMountedRef
  ])

  return (
    <Flex
      flexGrow='1'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='stretch'
    >
      <Flex
        flexGrow='1'
        flexDirection='column'
        justifyContent='start'
        alignItems='stretch'
      >
        <Flex alignItems='baseline' mb='1rem'>
          <Text textAlign='right' w='8rem' ml='1rem' mr='1rem'>URL</Text>
          <FormControl mr='2rem'>
            <InputGroup>
              <Input
                size='sm'
                value={url}
                onChange={handleInputUrl}
              />
            </InputGroup>
          </FormControl>
        </Flex>
        <Flex alignItems='baseline' mb='1rem'>
          <Text textAlign='right' w='8rem' ml='1rem' mr='1rem'>Save Path</Text>
          <FormControl mr='2rem'>
            <InputGroup size='sm'>
              <Input value={currentPath} readOnly />
              <InputRightAddon children={`Available disk space: ${currentPath === '' ?  ' ' : availableSpace} GB`} />
              <Button
                w='6rem'
                ml='1rem'
                colorScheme='teal'
                variant='solid'
                onClick={selectFolder}
              >
                Select
              </Button>
            </InputGroup>
          </FormControl>
        </Flex>
      </Flex>
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
          <Button
            colorScheme='teal'
            variant='solid'
            onClick={startDownload}
          >
            Download
          </Button>
          <Button colorScheme='teal' variant='outline'>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Video