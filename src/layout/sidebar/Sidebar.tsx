/*
 * Created Date: 2022-06-27 10:27:18
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-27 04:53:07
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import { TbMovie, TbRefresh } from 'react-icons/tb'
import CustomIconButton from '@/components/custom_icon_button/CustomIconButton'

function Sidebar() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const pressBtn = (e: any, i: number, path: string) => {
    setActiveIndex(i)
    navigate(path)
  }
  
  return (
    <Flex
      justifyContent='start'
      flexDirection='column'
    >
      <CustomIconButton
        as={TbMovie}
        text='Videos'
        boxSize='6rem'
        iconSize='4rem'
        fontSize='1rem'
        borderRadius='6%'
        color='teal'
        isActive={activeIndex === 0}
        onClick={(e: any) => pressBtn(e, 0, '/video')}
      />
      <CustomIconButton
        as={TbRefresh}
        text='Convert'
        boxSize='6rem'
        iconSize='4rem'
        fontSize='1rem'
        borderRadius='6%'
        color='teal'
        isActive={activeIndex === 1}
        onClick={(e: any) => pressBtn(e, 1, '/convert')}
      />
    </Flex>
  )
}

export default Sidebar