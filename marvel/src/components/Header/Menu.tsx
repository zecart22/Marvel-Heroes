import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">LAB MARVEL</DrawerHeader>
        <DrawerBody>
          <VStack spacing="5">
            <Text color="#FFFF" as="button">
              {isHome ? (
                <Link href="#">INICIO</Link>
              ) : (
                <Link href="/">INICIO</Link>
              )}
            </Text>

            <Text as="button">
              {isHome ? (
                <Link href="#register">CADASTRO</Link>
              ) : (
                <Link href="/#register">CADASTRO</Link>
              )}
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
