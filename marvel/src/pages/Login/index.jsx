import {
  Flex,
  Grid,
  Heading,
  Text,
  Center,
  Image,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import spider from "../../assets/images/login/log2.png";

import { Header } from "../../components/Header";

import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useState } from "react";

export const Login = ({ autenticador, setAutenticador }) => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [image, setImage] = useState();

  const [isLoged, setIsLoged] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    const {
      profileObj: { name, email, imageUrl },
    } = response;
    setName(name);
    setEmail(email);
    setImage(imageUrl);
    setIsLoged(true);
    setAutenticador(true);
  };

  const failureResponseGoogle = (response) => {
    console.log();
  };

  if (autenticador) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <>
      {isLargerThan769 ? (
        <>
          <Header />

          <Flex
            height="100vh"
            justifyContent="center"
            alignItems={["flex-start", "flex-start", "center"]}
            bg="primary.main"
            backgroundSize="cover"
          >
            <Center>
              <Image
                src={spider}
                w="380px"
                h="750px"
                pos="absolute"
                top="-50px"
                _hover={{ transform: "translateY(-100px)" }}
                mt="80px"
                ml="120px"
              />
            </Center>
            <Grid
              as="form"
              width="800px"
              alignItems="center"
              paddingX={[4, 4, 10, 10]}
              paddingY={8}
              marginX={[2, 2, 8, 8]}
              marginTop={[10, 10, 0, 0]}
              bgColor="secondary.main"
              textAlign="center"
              borderRadius="20px"
              mt="100px"
            >
              <Heading
                color="primary.main"
                fontFamily="Fauna One"
                text-shadow="0px 10px 10px rgba(0, 0, 0, 0.25)"
              >
                LOGIN
              </Heading>
              <VStack mt="8" spacing="10">
                <Text
                  color="primary.main"
                  fontSize={["28px", "28px", "10px", "28px"]}
                  mt="40px"
                  ml="70px"
                  fontFamily="body"
                >
                  Faça o login direto com sua conta Google
                  <br />
                  simples e rápido !
                  <br />
                  <br />
                </Text>
                <GoogleLogin
                  clientId="676134593457-o5bc3kpqnbt7t2ae0o55d3upnslc8q0j.apps.googleusercontent.com"
                  buttonText="Logar com Google"
                  onSuccess={responseGoogle}
                  onFailure={failureResponseGoogle}
                />
              </VStack>
            </Grid>

            <Center flexDirection="column">
              <Text
                fontSize={["48px", "48px", "30px", "48px"]}
                mt="40px"
                fontFamily="body"
              >
                " Com grandes poderes
                <br />
                vem grandes responsabilidades"
                <br />
                <br />
                Tio Been
              </Text>
            </Center>
          </Flex>
        </>
      ) : (
        <>
          <Header />
          <Flex
            height="100vh"
            justifyContent="center"
            alignItems={["flex-start", "flex-start", "center"]}
            bg="primary.main"
            backgroundSize="cover"
          >
            <Grid
              as="form"
              width="350px"
              alignItems="center"
              paddingX={[4, 4, 10, 10]}
              paddingY={8}
              marginX={[2, 2, 8, 8]}
              marginTop={[10, 10, 0, 0]}
              bgColor="secondary.main"
              textAlign="center"
              borderRadius="20px"
              mt="100px"
            >
              <Heading
                color="primary.main"
                fontFamily="Fauna One"
                text-shadow="0px 10px 10px rgba(0, 0, 0, 0.25)"
              >
                LOGIN
              </Heading>
              <VStack mt="8" spacing="10">
                <Text
                  color="primary.main"
                  fontSize={["28px", "28px", "10px", "28px"]}
                  mt="40px"
                  fontFamily="body"
                >
                  Faça o login direto com sua conta Google simples e rápido !
                  <br />
                  <br />
                  <br />
                </Text>

                <GoogleLogin
                  clientId="676134593457-o5bc3kpqnbt7t2ae0o55d3upnslc8q0j.apps.googleusercontent.com"
                  buttonText="Logar com Google"
                  onSuccess={responseGoogle}
                  onFailure={failureResponseGoogle}
                />
              </VStack>
            </Grid>
          </Flex>
        </>
      )}
    </>
  );
};
