import {
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  Center,
  Image,
  useToast,
  VStack,
} from "@chakra-ui/react";
import spider from "../../assets/images/login/log2.png";
import city from "../../assets/images/login/log1.png";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

export const Login = () => {
  return (
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
            LOGIN
          </Heading>
          <VStack mt="8" spacing="10">
            <input placeholder="Digite seu email" />
            <input placeholder="Digite sua senha" type="password" />
            <Text>
              Novo por aqui? <br />{" "}
              <Link color="primary.main" href="/signup">
                Clique aqui
              </Link>{" "}
              e faça seu cadastro
            </Text>
            <Button
              type="submit"
              width="560px"
              color="primary.main"
              bg="secondary.main1"
              Weight="400"
            >
              GO!
            </Button>
          </VStack>
        </Grid>
        <Center
          backgroundImage={city}
          w="390px"
          h="530px"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundColor="primary.main"
          pos="absolute"
          top="510px"
          right="10px"
        >
          {/* <Image src={city} /> */}
          <Image src={spider} w="180px" h="350px" pos="absolute" top="-50px" />
        </Center>
      </Flex>
    </>
  );
};
