import {
  Center,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

import { useHistory, useLocation, useParams } from "react-router-dom";
import logoLinkedin from "../../assets/images/footer/linkedin.png";
import logoGit from "../../assets/images/footer/footer2.png";
import logoMarvel from "../../assets/images/footer/footer1.png";

export const Footer = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <Flex
      h="72px"
      flexDirection="row"
      justifyContent="space-between"
      px="5"
      py="1"
      bg="secondary.main1"
      boxShadow="0px 1px 4px"
      position="absolute"
      width="100%"
      zIndex="auto"
    >
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center flexDirection="row" marginY={10} width="250px">
              {/*  <Avatar size="2xl" src={robert} /> */}
              <Flex gap="10px" alignItems="center">
                <Link
                  href="https://www.linkedin.com/in/robertpupo/"
                  isExternal
                  color="#0e76a8"
                >
                  <Center w="32px">
                    <FaLinkedin />
                  </Center>
                </Link>
              </Flex>
              <Center>
                <Image src={logoGit} h="37px" w="42" />
              </Center>
              <Center>
                <Image src={logoLinkedin} h="37px" w="42" />
              </Center>
              <Center>
                <Image
                  src={logoMarvel}
                  h="37px"
                  w="42"
                  position="absolute"
                  left="250px"
                />
              </Center>
            </Center>
          </Flex>
        </>
      ) : (
        <></>
      )}

      <Flex justifyContent="space-between">
        <Center>
          <Text
            fontSize="10px"
            color="#FFF"
            position="absolute"
            left="30px"
            bottom="48px"
          >
            {" "}
            Desenvolvido por Robert Pupo
          </Text>
        </Center>
        <Center>
          <Link href="https://github.com/zecart22" isExternal color="#0e76a8">
            <Image
              src={logoGit}
              h="27px"
              w="42"
              position="absolute"
              left="50px"
              bottom="15px"
            />
          </Link>
        </Center>
        <Center>
          <Link
            href="https://www.linkedin.com/in/robertpupo/"
            isExternal
            color="#0e76a8"
          >
            <Image
              src={logoLinkedin}
              h="27px"
              w="42"
              position="absolute"
              left="100px"
              bottom="15px"
            />
          </Link>
        </Center>
        <Center flexDirection="column">
          <Text
            fontSize="10px"
            color="#FFF"
            position="absolute"
            left="250px"
            bottom="48px"
          >
            {" "}
            Oficial API :
          </Text>
          <Link href="https://developer.marvel.com/" isExternal color="#0e76a8">
            <Image
              src={logoMarvel}
              h="37px"
              w="42"
              position="absolute"
              left="250px"
              bottom="10px"
            />
          </Link>
        </Center>
      </Flex>
    </Flex>
  );
};
