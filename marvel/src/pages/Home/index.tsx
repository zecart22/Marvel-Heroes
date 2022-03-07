import { Header } from "../../components/Header";

import { Button } from "../../components/Button";
import logan from "../../assets/images/home/home4.png";
import thanos from "../../assets/images/home/home3.png";

import imageHeaderBack from "../../assets/images/home/home888.png";
import { useHistory } from "react-router-dom";
import {
  Box,
  Heading,
  VStack,
  Center,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export const Home = () => {
  const history = useHistory();
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  return (
    <>
      {isLargerThan769 ? (
        <Box width="100vw">
          <Header />
          <Flex flexDirection="column" position="relative" top="70px">
            <VStack align-content="center" mt="4" spacing={["4", "4", "10"]}>
              <Center flexDirection="column">
                <Image src={imageHeaderBack} mt="-12px" />
              </Center>
              <Heading
                fontSize={["30px", "50px", "55px"]}
                fontFamily="bodySecondary"
                fontWeight="400"
              >
                SEJA BEM VINDO AO
              </Heading>
              <Heading
                fontSize={["30px", "50px", "55px"]}
                fontFamily="bodySecondary"
                fontWeight="400"
                color="secondary.main"
              >
                LAB DA MARVEL
              </Heading>
              <Center mb="100px" ml="300px" flexDirection="row">
                <Image src={thanos} />
                <Center flexDirection="column">
                  <Text
                    fontSize={["48px", "48px", "30px", "48px"]}
                    mt="40px"
                    fontFamily="body"
                  >
                    " Aqui você encontrará um
                    <br />
                    acervo com muitas Comics e
                    <br />
                    Personagens do universo da
                    <br />
                    Marvel . Essa aplicação é
                    <br />
                    baseada na API oficial da
                    <br />
                    empresa que é muita rica em
                    <br />
                    informações para os fãs
                    <br />
                    desse maravilhoso universo
                    <br />
                    de super heróis e vilões. "
                  </Text>
                  <Button
                    mt="20px"
                    w="490px"
                    onClick={() => history.push("/login")}
                    children={"Logar!"}
                  ></Button>
                </Center>

                <Image src={logan} />
              </Center>
            </VStack>
          </Flex>
        </Box>
      ) : (
        <Box width="100vw">
          <Header />
          <Flex flexDirection="column" position="relative" top="70px">
            <VStack mt="4" spacing={["4", "4", "10"]}>
              <Heading
                fontSize={["30px", "50px", "55px"]}
                fontFamily="bodySecondary"
                fontWeight="400"
              >
                SEJA BEM VINDO AO
              </Heading>
              <Heading
                fontSize={["30px", "50px", "55px"]}
                fontFamily="bodySecondary"
                fontWeight="400"
                color="secondary.main"
              >
                LAB DA MARVEL
              </Heading>
              <Text
                fontSize={["20px", "40px", "40px"]}
                mt="40px"
                fontFamily="body"
              >
                " Aqui você encontrará um
                <br />
                acervo com muitas Comics e
                <br />
                Personagens do universo na
                <br />
                Marvel . Essa aplicação é
                <br />
                baseada na API oficial da
                <br />
                empresa que é muita rica em
                <br />
                informações para os fãs
                <br />
                desse maravilhoso universo
                <br />
                de super heróis e vilões. "
              </Text>
              <Center flexDirection="column">
                <Image src={logan} w="552px" h="761px" />
                <Button
                  onClick={() => history.push("/login")}
                  children={"Logar!"}
                ></Button>
              </Center>
            </VStack>
          </Flex>
        </Box>
      )}
    </>
  );
};
