import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react';

const SidebarContent = ({ onClick }) => (
  <VStack>
    <Button onClick={onClick} w="100%">
      Home
    </Button>
    <Button onClick={onClick} w="100%">
      About
    </Button>
    <Button onClick={onClick} w="100%">
      Contact
    </Button>
  </VStack>
);

const Sidebar = ({ variant }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent />
    </Box>
  ) : (
    <Drawer placement="left">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
