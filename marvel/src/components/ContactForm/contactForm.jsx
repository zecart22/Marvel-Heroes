import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../Button";
import {
  useToast,
  Input,
  Textarea,
  FormLabel,
  VStack,
  Text,
} from "@chakra-ui/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [isSucess, setIsSucess] = useState(false);

  if (state.succeeded) {
    console.log(state.succeeded);
    return <p>Thanks for joining!</p>;
  }

  const SucessMessage = () => {
    setIsSucess(true);
  };

  return (
    <>
      {!isSucess ? (
        <>
          <VStack
            as="form"
            padding="15px"
            width="350px"
            onSubmit={handleSubmit}
            justifyContent="center"
            alignItems={["flex-start", "flex-start", "center", "flex-start"]}
          >
            <FormLabel color="primary.main" textAlign="left" htmlFor="name">
              Nome{" "}
            </FormLabel>
            <Input
              size="sm"
              bg="primary.main"
              id="name"
              type="name"
              name="name"
              required="true"
            />

            <FormLabel color="primary.main" htmlFor="email">
              Email
            </FormLabel>
            <Input
              size="sm"
              bg="primary.main"
              id="email"
              type="email"
              name="email"
              required="true"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <FormLabel color="primary.main" htmlFor="menssagem">
              Menssagem{" "}
            </FormLabel>
            <Textarea bg="primary.main" id="message" />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              bg="secondary.main1"
              type="submit"
              disabled={state.submitting}
              onClick={() => SucessMessage()}
            >
              Enviar
            </Button>
          </VStack>
        </>
      ) : (
        <>
          <Text fontSize="30px" color="primary.main">
            Menssagem enviada com sucesso <br /> em breve retornaremos seu
            contato.
          </Text>
        </>
      )}
    </>
  );
}
export default ContactForm;
