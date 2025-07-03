'use client'

import { IconButton, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeButton(props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconColor = useColorModeValue('brand.700', 'brand.200');
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('brand.100', 'brand.700');
  return (
    <Tooltip label={colorMode === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
      <IconButton
        onClick={toggleColorMode}
        variant='ghost'
        aria-label='Toggle color mode'
        size='lg'
        icon={colorMode === 'dark' ? <LuMoon size={22} /> : <LuSun size={22} />}
        color={iconColor}
        bg={bg}
        _hover={{ bg: hoverBg, transform: 'scale(1.1)' }}
        transition='all 0.2s'
        borderRadius='full'
        {...props}
      />
    </Tooltip>
  );
}

export { useColorMode, useColorModeValue };
