import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface ButtonProps extends ChakraButtonProps {
  children: string;
  highlight?: boolean;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, highlight, ...rest },
  ref
) => (
  <>
    {highlight ? (
      <ChakraButton
        bg="secondary.main"
        color="#0C0D0C"
        borderStyle="none"
        borderRadius="35px"
        fontSize="18px"
        fontWeight="600"
        textShadow="1px 1px gray.600"
        textTransform="uppercase"
        w="300px"
        h="50px"
        _hover={{
          cursor: "pointer",
          filter: "brightness(120%)",
        }}
        _active={{
          border: "2px solid primary.main",
          _hover: {
            bg: "#FFFF",
          },
        }}
        {...rest}
      >
        {children}
      </ChakraButton>
    ) : (
      <ChakraButton
        bg="secondary.main"
        color="primary.main"
        borderStyle="none"
        fontSize="20px"
        fontWeight="600"
        textShadow="1px 1px gray.600"
        textTransform="uppercase"
        w="200px"
        h="50px"
        _hover={{
          cursor: "pointer",
          filter: "brightness(120%)",
        }}
        _active={{
          border: "1px solid primary.main",
          _hover: {
            bg: "#FFFF",
          },
        }}
        {...rest}
      >
        {children}
      </ChakraButton>
    )}
  </>
);

export const Button = forwardRef(ButtonBase);
