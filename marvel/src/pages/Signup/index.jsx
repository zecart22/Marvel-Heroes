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
  VStack,
  Box,
  FormControl,
  useMediaQuery,
} from "@chakra-ui/react";
import tony from "../../assets/images/signup/sgup1.png";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import apiRegister from "../../services";
import { Redirect, useHistory } from "react-router";

export const Signup = ({ autenticador }) => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),

    email: yup.string().required("Email obrigatório").email("email inválido"),

    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minimo de 6 caracteres"),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes, tente novamente")
      .required("Campo obrigatório"),

    contact: yup
      .string()
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        "Tefone inválido"
      )
      .required("Telefone obrigatório"),

    /*  bio: yup.string().required(" Bio obrigatória ") */
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    console.log(user);
    apiRegister
      .post("/users", user)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  if (autenticador) {
    return <Redirect to="/DashBoard" />;
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
                fontFamily="Fauna One"
                text-shadow="0px 10px 10px rgba(0, 0, 0, 0.25)"
              >
                CADASTRO
              </Heading>
              <form>
                <VStack
                  mt="8"
                  spacing="10"
                  onSubmit={handleSubmit(onSubmitFunction)}
                >
                  <Input
                    bg="primary.main"
                    register={register}
                    placeholder="Nome"
                    {...register("name")}
                  />
                  <p>{errors.name?.message}</p>
                  <Input
                    bg="primary.main"
                    register={register}
                    placeholder="Email"
                    {...register("email")}
                  />
                  <p>{errors.email?.message}</p>
                  <Input
                    bg="primary.main"
                    placeholder="Senha"
                    type="password"
                    {...register("password")}
                  />
                  <p>{errors.password && errors.password?.message}</p>
                  <Input
                    bg="primary.main"
                    placeholder="Confirmar senha"
                    type="password"
                    {...register("passwordConfirm")}
                  />
                  <p>
                    {errors.passwordConfirm && errors.passwordConfirm?.message}
                  </p>

                  <Text>
                    Já tem cadastro ? <br />{" "}
                    <Link color="primary.main" href="/login">
                      Clique aqui
                    </Link>{" "}
                    para logar.
                  </Text>
                  <Button
                    type="submit"
                    width="560px"
                    color="primary.main"
                    bg="secondary.main1"
                    Weight="400"
                    cursor="pointer"
                  >
                    GO!
                  </Button>
                </VStack>
              </form>
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
                CADASTRO
              </Heading>
              <VStack mt="8" spacing="10">
                <Input bg="primary.main" placeholder="Digite nome" />
                <Input bg="primary.main" placeholder="Digite sobrenome" />
                <Input bg="primary.main" placeholder="Digite email" />
                <Input
                  bg="primary.main"
                  placeholder="Digite sua senha"
                  type="password"
                />
                <Input
                  bg="primary.main"
                  placeholder="Confirme sua senha"
                  type="password"
                />

                <Text fontSize="30px">
                  Já tem cadastro? <br />{" "}
                  <Link color="primary.main" href="/login">
                    Clique aqui
                  </Link>{" "}
                  para logar.
                </Text>
                <Button
                  type="submit"
                  width="560px"
                  color="primary.main"
                  bg="secondary.main1"
                  Weight="400"
                  cursor="pointer"
                >
                  GO!
                </Button>
              </VStack>
            </Grid>
          </Flex>
        </>
      )}
    </>
  );
};
