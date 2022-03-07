import {
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  Center,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import tony from "../../assets/images/signup/sgup1.png";
import { Header } from "../../components/Header";

import logoMarvel from "../../assets/images/Header/header2.png";

export const OficialApi = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

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
            <Center flexDirection="column">
              <Text
                fontSize={["48px", "48px", "30px", "30px"]}
                mt="40px"
                ml="-40px"
                fontFamily="body"
              >
                “Eu posso criar um mundo sem guerra.
                <br />
                Eu posso fazer um mundo sem álcool ou drogas.
                <br />
                Sem ódio ou inveja. Mas depois ....
                <br />
                esse não seria o mundo em que vivemos.
                <br />
                Nada poderia ser aprendido, nada viria a ser ganho.
                <br />
                Nós não avançaríamos como espécie.”
                <br />
                <br />
                Tony Stark
              </Text>
            </Center>

            <Grid
              as="form"
              width="900px"
              alignItems="center"
              paddingX={[4, 4, 10, 10]}
              paddingY={8}
              marginX={[2, 2, 8, 8]}
              marginTop={[10, 10, 0, 0]}
              bgColor="secondary.main"
              textAlign="center"
              borderRadius="20px"
            >
              <Heading
                color="primary.main"
                text-shadow="0px 10px 10px rgba(0, 0, 0, 0.25)"
              >
                <Link
                  href="https://developer.marvel.com/"
                  isExternal
                  color="primary.main"
                >
                  API OFICIAL
                </Link>
              </Heading>
            </Grid>
            <Center>
              <Image
                src={tony}
                w="380px"
                h="600px"
                pos="absolute"
                top="-50px"
                mt="200px"
                _hover={{ transform: "translateX(-50px)" }}
              />
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
              width="600px"
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
                API OFICIAL
              </Heading>
              <Link
                href="https://developer.marvel.com/"
                isExternal
                color="primary.main"
              >
                <Image
                  src={logoMarvel}
                  h="80px"
                  w="300px"
                  /*  ml="270px"
                  mt="60px" */
                />
              </Link>
            </Grid>
          </Flex>
        </>
      )}
    </>
  );
};
