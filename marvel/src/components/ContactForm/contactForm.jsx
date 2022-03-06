import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../Button";
import {
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  Center,
  Image,
  useToast,
  Input,
  Textarea,
  FormLabel,
  VStack,
  Box,
  FormControl,
  useMediaQuery,
} from "@chakra-ui/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    console.log(state.succeeded);
    return <p>Thanks for joining!</p>;
  }
  return (
    <VStack
      as="form"
      padding="15px"
      width="800px"
      onSubmit={handleSubmit}
      justifyContent="center"
      alignItems={["flex-start", "flex-start", "center", "flex-start"]}
    >
      <FormLabel color="primary.main" textAlign="left" htmlFor="name">
        Nome{" "}
      </FormLabel>
      <Input bg="primary.main" id="name" type="name" name="name" />
      <FormLabel color="primary.main" htmlFor="email">
        Email
      </FormLabel>
      <Input bg="primary.main" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <FormLabel color="primary.main" htmlFor="menssagem">
        Menssagem{" "}
      </FormLabel>
      <Textarea bg="primary.main" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button bg="secondary.main1" type="submit" disabled={state.submitting}>
        Enviar
      </Button>
    </VStack>
  );
}
export default ContactForm;
