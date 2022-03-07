import {
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/images/Header/header2.png";
import logo2 from "../../assets/images/Header/header3.png";
import { Menu } from "./Menu";

export const Header = () => {
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
      justifyContent="space-between"
      px="5"
      py="1"
      bg="secondary.main"
      boxShadow="0px 1px 4px"
      position="fixed"
      width="100%"
      zIndex="100"
    >
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center>
              <Image src={logo2} h="40px" w="47" />
              <Image src={logo} h="42px" w="59" />
              {/* <Image src={logo} h="72px" w="89" /> */}
            </Center>
          </Flex>
          <Flex alignItems="flex-end" color="primary.main">
            <HStack spacing="5">
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#">INICIO</Link>
                ) : (
                  <Link href="/">INICIO</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link onClick={() => history.push("/oficialapi")}>
                    API OFICIAL
                  </Link>
                ) : (
                  <Link onClick={() => history.push("/oficialapi")}>
                    API OFICIAL
                  </Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link onClick={() => history.push("/Dashboard")}>
                    CONSULTAR API
                  </Link>
                ) : (
                  <Link onClick={() => history.push("/Dashboard")}>
                    CONSULTAR API
                  </Link>
                )}
              </Text>
            </HStack>
          </Flex>
        </>
      ) : (
        <>
          <Flex>
            <Center as="button" onClick={onToggle}>
              <GiHamburgerMenu />
            </Center>

            <Center>
              <Image src={logo2} h="40px" w="47" ml="25px" />
              <Image src={logo} h="42px" w="59" />
            </Center>
          </Flex>
          <Menu isOpen={isOpen} onClose={onClose} />
        </>
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
