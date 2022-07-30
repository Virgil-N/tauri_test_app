/*
 * Created Date: 2022-06-28 11:35:54
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-07-30 23:09:39
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
import { invoke, dialog } from '@tauri-apps/api'

function Settings() {
  const [defaultPath, setDefaultPath] = useState('')
  const [availableSpace, setAvailableSpace] = useState(0)

  const selectFolder = async () => {
    const selected = await dialog.open({directory: true, multiple: false})
    if (selected != null) {
      setDefaultPath(selected.toString())
      showFreeSpace(selected.toString())
    }
  }

  const showFreeSpace = async (path: String) => {
    const freeSpace = await invoke('disk_free_size', {path}) as SetStateAction<number>
    setAvailableSpace(freeSpace)
  }

  useEffect(() => {
    showFreeSpace(defaultPath)
  }, [])

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
        <Flex alignItems='center' mb='1rem'>
          <Text textAlign='right' w='11rem' ml='1rem' mr='1rem'>Default Save Path</Text>
          <FormControl mr='2rem'>
            <InputGroup size='sm'>
              <Input value={defaultPath} readOnly />
              <InputRightAddon children={`Available disk space: ${defaultPath === '' ?  ' ' : availableSpace} GB`} />
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
            // onClick={}
          >
            Save
          </Button>
          <Button colorScheme='teal' variant='outline'>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}

export default Settings