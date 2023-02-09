/*
 * Created Date: 2022-06-27 03:03:23
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2023-02-09 21:08:14
 * Modified By: Virgil-N (ghost@earth.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useRef, useEffect, useState, SetStateAction } from "react";
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
} from "@chakra-ui/react";
import { invoke, dialog, fs } from "@tauri-apps/api";

function Download() {
  const [url, setUrl] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const [availableSpace, setAvailableSpace] = useState(0);

  const handleInputUrl = (e: any) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const showFreeSpace = async (path: String) => {
    const freeSpace = (await invoke("disk_free_size", {
      path,
    })) as SetStateAction<number>;
    console.log(freeSpace);
    setAvailableSpace(freeSpace);
  };

  const selectFolder = async () => {
    const selected = await dialog.open({ directory: true, multiple: false });
    if (selected != null) {
      setCurrentPath(selected.toString());
      showFreeSpace(selected.toString());
    }
  };

  const startDownload = () => {
    console.log(url);
  };

  useEffect(() => {
    showFreeSpace(currentPath);
  }, []);

  return (
    <Flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="start"
        alignItems="stretch"
      >
        <Flex alignItems="center" mb="1rem">
          <Text textAlign="right" w="6rem" ml="1rem" mr="1rem">
            URL
          </Text>
          <FormControl mr="2rem">
            <InputGroup>
              <Input size="sm" value={url} onChange={handleInputUrl} />
            </InputGroup>
          </FormControl>
        </Flex>
      </Flex>
      <Box h="4rem" flexShrink="0">
        <Stack
          h="100%"
          direction="row"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Button colorScheme="teal" variant="solid" onClick={startDownload}>
            Download
          </Button>
          <Button colorScheme="teal" variant="outline">
            Cancel
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Download;
