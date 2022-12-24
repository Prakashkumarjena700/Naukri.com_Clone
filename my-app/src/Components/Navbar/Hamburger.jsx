import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";


export default function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
      <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <p>Jobs</p>
            <p>Companies</p>
            <p>Services</p>
            <button>Login</button>
            <button>Register</button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
