/*
 * Created Date: 2022-06-24 02:00:38
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-28 10:41:16
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { Outlet } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Stack,
  Input,
  Center,
  Button,
  Divider,
  Heading,
  InputGroup,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  InputLeftElement,
} from "@chakra-ui/react";
import Sidebar from "@/layout/sidebar/Sidebar";

function Layout() {
  return (
    <Flex w="100%" h="100%" direction="row" alignItems="stretch">
      <Box w="7.2rem" flexShrink="0" padding="0.6rem">
        <Sidebar />
      </Box>
      <Divider orientation="vertical" />
      <Box
        flexGrow="1"
        display="flex"
        flexDirection="row"
        pt="1.2rem"
        pb="1.2rem"
        pl="0.6rem"
        pr="0.6rem"
      >
        <Outlet />
      </Box>
    </Flex>
  );
}

export default Layout;
