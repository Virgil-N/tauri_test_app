/*
 * Created Date: 2022-06-27 11:24:33
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2023-02-09 21:34:22
 * Modified By: Virgil-N (ghost@earth.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { Box, Icon, Text } from "@chakra-ui/react";
import styles from "./index.module.scss";

function CustomIconButton(props: any) {
  return (
    <div className={styles.root}>
      <Box
        className="box_style"
        as="button"
        width={props.boxSize}
        height={props.boxSize}
        borderRadius={props.borderRadius}
        color={props.color}
        backgroundColor={props.isActive ? `${props.color}.50` : "transparent"}
        _hover={{
          bg: `${props.color}.50`,
        }}
        _active={{
          bg: `${props.color}.50`,
        }}
        _focus={{
          // boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          bg: `${props.color}.50`,
        }}
        onClick={props.onClick}
      >
        <Icon as={props.as} boxSize={props.iconSize} />
        <Text fontSize={props.fontSize}>{props.text}</Text>
      </Box>
    </div>
  );
}

export default CustomIconButton;
