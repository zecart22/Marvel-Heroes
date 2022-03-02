import {
  FormControl,
  InputGroup,
  Input as ChakraInput,
  FormLabel,
  FormErrorMessage,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "negative.main",
  default: "information.main",
  success: "success.main",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon: Icon, error = null, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
    if (value.length > 1 && !error) {
      return setVariation("success");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel textTransform="uppercase" mb={0}>
          {label}
        </FormLabel>
      )}
      <InputGroup flexDirection="column">
        <ChakraInput
          id={name}
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          bgColor="primary.main"
          boxShadow="0px 4px 4px primary.main1"
          borderColor={inputVariation[variation]}
          border="2px solid"
          _placeholder={{ color: "gray.300" }}
          _focus={
            variation === "default"
              ? {
                  borderColor: "primary.main",
                }
              : {
                  borderColor: `${inputVariation[variation]}`,
                }
          }
          _hover={{
            borderColor: "primary.main",
          }}
          variant="outline"
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage color="negative.main">
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
