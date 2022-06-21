/**
 * Created Date: 2022-06-21 12:20:05
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-21 03:40:18
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { createGlobalTheme } from '@vanilla-extract/css'

export const global_theme = createGlobalTheme(':root', {
  color: {
    brand: 'transparent'
  },
  font: {
    body: 'comic sans ms'
  }
})