import {
  Box,
  Center,
  Image,
  Text,
  useMediaQuery,
  HStack,
  VStack,
} from "@chakra-ui/react";

import gifbg from "../../assets/images/dashboard/dash2.gif";

interface ComicsCardProps {
  name: string;
  price: number;
  image: string;
  year: number;
  description: string;
}

export const ComicsCard = ({
  name,
  image,
  year,
  description,
  price,
}: ComicsCardProps) => {
  const [isLargerThan769] = useMediaQuery("(min-width: 821px)");

  return (
    <>
      {isLargerThan769 ? (
        <Box
          mt="20px"
          ml="100px"
          cursor="pointer"
          _hover={{
            transform: "translateY(-7px)",
            borderColor: "primary.main",
          }}
          bg="primary.main1"
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px"
          width="1500px"
          boxShadow="dark-lg"
          paddingY={6}
          paddingX={4}
        >
          <VStack spacing={4} marginTop={6} flexDirection="row">
            <Box
              width="650px"
              marginBottom={6}
              backgroundImage={gifbg}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              align-items="center"
              ml="8px"
            >
              <Image src={image} boxSize="360px" objectFit="cover" ml="120px" />
            </Box>

            <Center flexDirection="column">
              <VStack spacing="5" mb="20px" ml="100px" flexDirection="column">
                <Box
                  as="button"
                  bg="gray.600"
                  color="primary.main"
                  borderStyle="none"
                  borderRadius="15px"
                  fontSize="30px"
                  fontWeight="600"
                  textAlign="center"
                  w="400px"
                  h="10vw"
                  _hover={{
                    cursor: "pointer",
                    filter: "brightness(120%)",
                  }}
                  _active={{
                    border: "2px solid primary.main",
                    _hover: {
                      bg: "#FFFF",
                    },
                  }}
                >
                  <Text>{name}</Text>
                </Box>

                <Box
                  mb="20px"
                  as="button"
                  bg="gray.600"
                  color="primary.main"
                  borderStyle="none"
                  borderRadius="15px"
                  fontSize="30px"
                  fontWeight="600"
                  textAlign="center"
                  w="400px"
                  h="50px"
                  _hover={{
                    cursor: "pointer",
                    filter: "brightness(120%)",
                  }}
                  _active={{
                    border: "2px solid primary.main",
                    _hover: {
                      bg: "#FFFF",
                    },
                  }}
                >
                  <Text>{year}</Text>
                </Box>
              </VStack>
              <HStack spacing="5" ml="150px">
                <Text
                  color="primary.main"
                  textAlign="center"
                  fontWeight="700"
                  w="700px"
                >
                  {description}
                </Text>
              </HStack>
            </Center>
          </VStack>
        </Box>
      ) : (
        <Box
          mt="20px"
          cursor="pointer"
          _hover={{
            transform: "translateY(-7px)",
            borderColor: "primary.main",
          }}
          bg="primary.main1"
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px"
          width="350px"
          boxShadow="dark-lg"
          flexDirection="column"
          paddingY={6}
          paddingX={4}
        >
          <Box
            width="300px"
            marginBottom={6}
            backgroundImage={gifbg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            align-items="center"
            ml="8px"
          >
            <Image src={image} boxSize="200px" objectFit="cover" ml="45px" />
          </Box>
          <VStack spacing={4} marginTop={6}>
            <Box
              as="button"
              bg="gray.600"
              color="primary.main"
              borderStyle="none"
              borderRadius="15px"
              fontSize="30px"
              fontWeight="600"
              textAlign="center"
              w="300px"
              h="40vw"
              _hover={{
                cursor: "pointer",
                filter: "brightness(120%)",
              }}
              _active={{
                border: "2px solid primary.main",
                _hover: {
                  bg: "#FFFF",
                },
              }}
            >
              <Text>{name}</Text>
            </Box>

            <Box
              as="button"
              bg="gray.600"
              color="primary.main"
              borderStyle="none"
              borderRadius="15px"
              fontSize="30px"
              fontWeight="600"
              textAlign="center"
              w="300px"
              h="50px"
              _hover={{
                cursor: "pointer",
                filter: "brightness(120%)",
              }}
              _active={{
                border: "2px solid primary.main",
                _hover: {
                  bg: "#FFFF",
                },
              }}
            >
              <Text>{year}</Text>
            </Box>

            <Text color="primary.main" textAlign="center" fontWeight="700">
              {description}
            </Text>
          </VStack>
        </Box>
      )}
    </>
  );
};
