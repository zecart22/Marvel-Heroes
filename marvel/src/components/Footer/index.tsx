import {
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  Avatar,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useHistory, useLocation, useParams } from "react-router-dom";
import logoLinkedin from "../../assets/images/footer/linkedin.png";
import logoGit from "../../assets/images/footer/footer2.png";
import logoMarvel from "../../assets/images/footer/footer1.png";

export const Footer = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const history = useHistory();
  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <Flex
      h="72px"
      flexDirection="row"
      border="1px solid black"
      justifyContent="space-between"
      px="5"
      py="1"
      bg="secondary.main1"
      boxShadow="0px 1px 4px"
      position="fixed"
      width="100%"
      zIndex="100"
    >
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center flexDirection="column" marginY={10} width="250px">
              {/*  <Avatar size="2xl" src={robert} /> */}
              <Flex gap="10px" alignItems="center">
                <Text textStyle="h1">Robert Pupo</Text>
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
              <Text textStyle="headline">Quality Assurance</Text>

              <Image src={logoGit} h="72px" w="89" />
              <Image src={logoLinkedin} h="72px" w="89" />
              <Image src={logoMarvel} h="72px" w="89" />
            </Center>
          </Flex>
        </>
      ) : (
        <></>
      )}

      <Flex>
        <Center
          flexDirection="column"
          as="button"
          onClick={() => history.push("/login")}
        >
          <FaUserCircle style={{ width: "27px", height: "28px" }} />
          <Text>Login</Text>
        </Center>
      </Flex>
    </Flex>
  );
};
