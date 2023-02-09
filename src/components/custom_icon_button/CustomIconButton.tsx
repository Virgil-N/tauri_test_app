/*
 * Created Date: 2022-06-27 11:24:33
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-07-04 09:13:22
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { Box, Icon, Text } from "@chakra-ui/react";
import { css } from "@stitches/react";

function CustomIconButton(props: any) {
  const styledBox = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
    outline: "none",
    transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
  });

  return (
    <Box
      className={styledBox()}
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
  );
}

export default CustomIconButton;
